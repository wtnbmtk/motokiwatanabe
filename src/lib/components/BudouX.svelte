<script lang="ts">
  import { Parser, jaModel } from "budoux";
  import { onMount } from "svelte";

  export let text = "";
  let segments: string[] = [];

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
    text-align: center;
  }
  span {
    word-break: keep-all;
    overflow-wrap: anywhere;
  }
</style>
