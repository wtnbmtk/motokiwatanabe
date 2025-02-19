<script lang="ts">
  import Dialog from "$lib/components/Dialog.svelte";
  import Logo from "$lib/components/Logo.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import { fade } from "svelte/transition";

  let y = $state(0);
  let dialog = $state<HTMLDialogElement>();

  const openDialog = () => {
    if (dialog) {
      dialog.showModal();
      if (dialog) {
        dialog.addEventListener("click", (event) => {
          if (event.target === dialog) {
            dialog.close();
          }
        });
      }
    }
  };

  const closeDialog = () => {
    if (dialog) {
      dialog.close();
    }
  };
</script>

<header>
  <div>
    <a href="/"><Logo /></a>
    <Nav />
    <button onclick={openDialog} class="open" aria-label="menu open"
      >MENU</button
    >
  </div>
</header>
{#if y > 48}
  <header transition:fade class:fixed={y > 48}>
    <div>
      <a href="/"><Logo /></a>
      <Nav />
      <button onclick={openDialog} class="open" aria-label="menu open"
        >MENU</button
      >
    </div>
  </header>
{/if}
<svelte:window bind:scrollY={y} />
<Dialog bind:value={dialog} dispatch={closeDialog} />

<style>
  header,
  header.fixed {
    width: 100%;
    padding: 8px 16px 0;
    transition: 0.5s;
  }
  header {
    position: absolute;
    top: 0;
    z-index: 1;
  }
  header.fixed {
    position: fixed;
    top: 0;
    z-index: 1;
  }
  header > div,
  header.fixed > div {
    position: relative;
    max-width: 800px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    margin: auto;
  }

  header.fixed > div {
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
  }
  header > div > a {
    position: absolute;
    left: 16px;
    display: block;
    height: 40px;
    width: fit-content;
  }
  button {
    position: absolute;
    inset: 0 16px 0 auto;
    margin: auto;
    font-size: small;
    height: 40px;
    width: 40px;
  }
  @media (width >= 600px) {
    button.open {
      display: none;
    }
  }
</style>
