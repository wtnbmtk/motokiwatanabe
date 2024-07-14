<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let query = "";

  const dispatch = createEventDispatcher();

  function handleSubmit(event: Event) {
    event.preventDefault();
    const input = (event.target as HTMLFormElement).querySelector(
      "input"
    ) as HTMLInputElement;
    const value = input.value;
    dispatch("search", { query: value });
  }
</script>

<form on:submit={handleSubmit}>
  <input type="text" name="search" bind:value={query} placeholder="Search..." />
  <button type="submit"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-search"
      width="24"
      height="24"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <symbol id="search-icon" viewBox="0 0 24 24">
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" /></symbol
      >
      <use href="#search-icon" />
    </svg></button
  >
</form>

<style>
  form {
    display: flex;
    place-content: center;
    border: solid 1px;
    width: 200px;
    margin: 1rem auto;
  }
  input {
    border: unset;
    width: 176px;
  }
  input:focus {
    outline: 0;
    border: 2px solid #000;
  }
</style>
