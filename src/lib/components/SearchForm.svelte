<script lang="ts">
  import { goto } from "$app/navigation";

  let { query = $bindable() } = $props();
  let input = $state(query);

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    goto(`/search?q=${encodeURIComponent(input)}`);
  };
</script>

<form onsubmit={handleSubmit}>
  <input type="text" name="search" bind:value={input} placeholder="Search..." />
  <button type="submit" aria-label="Search"
    ><svg class="icons" stroke-width="2">
      <symbol id="search-icon" viewBox="0 0 24 24">
        <path
          stroke="white"
          fill="none"
          d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"
        />
        <path stroke="white" d="M21 21l-6 -6" /></symbol
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
    width: 80%;
    margin: 1rem auto;
  }
  input {
    border: unset;
    border-radius: unset;
    width: 100%;
    height: 34px;
    font-size: 1.2rem;
  }
  input:focus {
    outline: 0;
    border: 2px solid #000;
  }
  button {
    background-color: #000;
  }
  .icons {
    width: 34px;
  }
</style>
