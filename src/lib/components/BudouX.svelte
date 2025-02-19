<script lang="ts">
  import { Parser, jaModel } from "budoux";
  import { onMount } from "svelte";

  interface Props {
    text?: string;
  }

  let { text = "" }: Props = $props();
  let segments: string[] = $state([]);

  onMount(() => {
    const parser = new Parser(jaModel);
    segments = parser.parse(text);
  });
</script>

<div class="budoux">
  {#each segments as segment}
    <span>
      {segment}
    </span>
  {/each}
</div>

<style>
  .budoux {
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0 0 2rem;
  }
  span {
    word-break: keep-all;
    overflow-wrap: anywhere;
  }
</style>
