<script lang="ts">
  import { curveCardinalClosed, line } from "d3-shape";
  import { getContext, onMount, tick } from "svelte";
  import { cubicOut } from "svelte/easing";
  import { type Tweened, tweened } from "svelte/motion";
  import type { Readable } from "svelte/store";

  interface DataPoint {
    [key: string]: number; // データ構造に合わせて修正
  }

  interface LayerCakeContext {
    data: Readable<DataPoint[]>;
    width: Readable<number>;
    height: Readable<number>;
    xGet: Readable<(d: DataPoint) => number[]>;
    config: Readable<{
      x: string[];
    }>;
  }

  const { data, width, height, xGet, config } =
    getContext<LayerCakeContext>("LayerCake");

  export let fill = "#40583e";
  export let stroke = "#40583e";
  export let strokeWidth = 2;
  export let fillOpacity = 0.5;
  export let r = 4.5;
  export let circleFill = "#40583e";
  export let circleStroke = "#fff";
  export let circleStrokeWidth = 1;

  const progress: Tweened<number> = tweened(0, {
    duration: 1500,
    easing: cubicOut,
  });

  $: angleSlice = (Math.PI * 2) / $config.x.length;

  $: pathGenerator = line<number>()
    .curve(curveCardinalClosed)
    .x((d, i) => d * $progress * Math.cos(angleSlice * i - Math.PI / 2))
    .y((d, i) => d * $progress * Math.sin(angleSlice * i - Math.PI / 2));

  onMount(async () => {
    await tick(); // Svelteの更新を待つ
    progress.set(1);
    console.log("Width:", $width, "Height:", $height); // デバッグ用
  });

  interface CirclePosition {
    cx: number;
    cy: number;
  }

  const getCirclePosition = (
    radius: number,
    index: number,
    progressValue: number
  ): CirclePosition => {
    const thisAngleSlice = angleSlice * index - Math.PI / 2;
    return {
      cx: radius * progressValue * Math.cos(thisAngleSlice),
      cy: radius * progressValue * Math.sin(thisAngleSlice),
    };
  };
</script>

<g transform="translate({$width / 2}, {$height / 2})">
  {#each $data as row}
    {@const xVals = $xGet(row)}
    <g class="radar-group" style="opacity: {$progress}">
      <path
        class="path-line"
        d={pathGenerator(xVals)}
        {stroke}
        stroke-width={strokeWidth}
        {fill}
        fill-opacity={fillOpacity}
      />

      {#each xVals as circleR, i}
        {@const pos = getCirclePosition(circleR, i, $progress)}
        <circle
          cx={pos.cx}
          cy={pos.cy}
          {r}
          fill={circleFill}
          stroke={circleStroke}
          stroke-width={circleStrokeWidth}
        />
      {/each}
    </g>
  {/each}
</g>

<style>
  .path-line {
    stroke-linejoin: round;
    stroke-linecap: round;
  }
  .radar-group {
    transition: opacity 100ms ease-out;
  }
</style>
