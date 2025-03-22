<script lang="ts">
  import { getContext } from "svelte";
  import type { Readable } from "svelte/store";

  interface LayerCakeContext {
    width: Readable<number>;
    height: Readable<number>;
    xDomain: Readable<[number, number]>;
    xRange: Readable<[number, number]>;
    config: Readable<{
      x: string[];
    }>;
  }

  const { width, height, xRange, config } =
    getContext<LayerCakeContext>("LayerCake");

  export let stroke = "#fff";
  export let opacity = 0.2;
  export let fontSize = 12;
  export let levels = 5;

  $: radius = $xRange[1];
  $: levelScale = radius / levels;
  $: angleSlice = (Math.PI * 2) / $config.x.length;
</script>

<g transform="translate({$width / 2}, {$height / 2})">
  <!-- 軸の同心円を描画 -->
  {#each Array(levels + 1) as _, i}
    <circle
      class="axis-level"
      cx="0"
      cy="0"
      r={levelScale * i}
      {stroke}
      {opacity}
    />
  {/each}

  <!-- 各軸線を描画 -->
  {#each $config.x as axis, i}
    {@const angle = angleSlice * i - Math.PI / 2}
    <line
      class="axis-line"
      x1="0"
      y1="0"
      x2={radius * Math.cos(angle)}
      y2={radius * Math.sin(angle)}
      {stroke}
      {opacity}
    />

    <!-- 軸ラベルを描画 -->
    <text
      class="axis-label"
      x={1.2 * radius * Math.cos(angle)}
      y={1.2 * radius * Math.sin(angle)}
      dy="0.35em"
      font-size={fontSize}
      text-anchor={angle < -Math.PI / 2 || angle > Math.PI / 2
        ? "end"
        : angle === -Math.PI / 2 || angle === Math.PI / 2
          ? "middle"
          : "start"}
    >
      {axis}
    </text>
  {/each}
</g>

<style>
  .axis-level,
  .axis-line {
    stroke-width: 1;
    vector-effect: non-scaling-stroke;
  }

  .axis-label {
    dominant-baseline: middle;
  }
</style>
