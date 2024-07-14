<script lang="ts">
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";

  const pages = [
    {
      name: "HOME",
      path: "/",
      style: "--index: 0;",
      d: "M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z",
    },
    {
      name: "ABOUT",
      path: "/about",
      style: "--index: 1;",
      d: "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z",
    },
    {
      name: "Articles",
      path: "/articles/latest/1",
      style: "--index: 2;",
      d: "M7.25 3.688a8.035 8.035 0 0 0-4.872-.523A.48.48 0 0 0 2 3.64v7.994c0 .345.342.588.679.512a6.02 6.02 0 0 1 4.571.81V3.688ZM8.75 12.956a6.02 6.02 0 0 1 4.571-.81c.337.075.679-.167.679-.512V3.64a.48.48 0 0 0-.378-.475 8.034 8.034 0 0 0-4.872.523v9.268Z",
    },
    {
      name: "CONTACT",
      path: "/contact",
      style: "--index: 3;",
      d: "M1 8.74c0 .983.713 1.825 1.69 1.943.764.092 1.534.164 2.31.216v2.351a.75.75 0 0 0 1.28.53l2.51-2.51c.182-.181.427-.286.684-.294a44.298 44.298 0 0 0 3.837-.293C14.287 10.765 15 9.723 15 8.74V4.26c0-.983-.713-1.825-1.69-1.943a44.447 44.447 0 0 0-10.62 0C1.712 2.435 1 3.277 1 4.26v4.482ZM5.5 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2.5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    },
    {
      name: "INFO",
      path: "/information",
      style: "--index: 4;",
      d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z",
    },
  ];

  let dialog: HTMLDialogElement;

  const openDialog = () => {
    dialog.showModal();
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  };

  const closeDialog = () => {
    dialog.close();
  };
</script>

<button
  on:click={openDialog}
  transition:fade
  class="open"
  aria-label="menu open"
>
  <span />
  <span />
  <span /></button
>

<dialog bind:this={dialog}>
  <div class="inner">
    <nav class="menu">
      <div>
        {#each pages as a}
          {#if a.path === $page.url.pathname}
            <a
              on:click={closeDialog}
              class="active"
              href={a.path}
              style={a.style}
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-4 h-4"
              >
                <path fill-rule="evenodd" d={a.d} /></svg
              >{a.name}</a
            >
          {:else}
            <a
              on:click={closeDialog}
              class="passive"
              href={a.path}
              style={a.style}
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-4 h-4"
              >
                <path fill-rule="evenodd" d={a.d} /></svg
              >{a.name}</a
            >
          {/if}
        {/each}
      </div>
    </nav>
    <form method="dialog">
      <button on:click={closeDialog} class="close" aria-label="menu close"
        ><span />
        <span /></button
      >
    </form>
  </div>
</dialog>

<style>
  button.open,
  button.close {
    position: fixed;
    z-index: 1;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  button.open {
    inset: auto 16px 16px auto;
    font-size: 0.8rem;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    transition: all 0.5s ease;
  }
  button.open span {
    position: absolute;
    display: block;
    height: 2px;
    width: 30px;
    margin: auto;
    background: white;
    transition: all 0.5s ease;
  }
  button.open span:first-child {
    inset: 18px 0 auto;
  }
  button.open span:nth-child(2) {
    inset: 0;
  }
  button.open span:last-child {
    inset: auto 0 18px;
  }
  button.close {
    inset: 0;
    margin: auto;
    background: #000;
    animation: in 0.5s ease;
    border: solid 2px #333;
  }
  button.close span {
    position: absolute;
    display: block;
    height: 2px;
    width: 30px;
    background: #fff;
    transition: all 0.5s;
  }
  button.close span:first-child {
    inset: 0;
    margin: auto;
    transform: rotate(45deg);
  }
  button.close span:last-child {
    inset: 0;
    margin: auto;
    transform: rotate(135deg);
  }
  dialog {
    position: fixed;
    inset: 0;
    margin: auto;
    height: 100%;
    width: 100%;
    max-width: 984px;
    border: none;
    background: none;
    pointer-events: none;
  }
  dialog[open] {
    animation: fade-in 0.7s ease-out;
    pointer-events: inherit;
  }
  dialog::backdrop {
    animation: fade-in 0.7s ease-out;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fade-out {
    from {
      display: block;
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes in {
    from {
      opacity: 0;
      transform: translateY(200%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @keyframes circle {
    from {
      opacity: 0;
      translate: none;
    }
    to {
      opacity: 1;
    }
  }
  .menu div a {
    position: absolute;
    inset: 0;
    margin: auto;
    --angle: calc(270deg + calc(290deg / 4 * var(--index)));
    --x: calc(cos(var(--angle)) * 100px);
    --y: calc(sin(var(--angle)) * 100px);
    translate: calc(var(--x) - 0%) calc(var(--y) - 0%);
    text-align: center;
    font-size: small;

    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    cursor: pointer;
    animation: circle 1s ease-in;
  }
  svg {
    width: 1rem;
    height: 1rem;
    margin: auto;
  }
  .active {
    background: #fff;
    color: #000;
    border: solid 2px #333;
  }
  .passive {
    background: #000;
    color: white;
    border: solid 2px #333;
  }
  @media (hover: hover) {
    button.open:hover span {
      transform: scaleX(1.2);
      transition: all 0.5s ease;
    }
    button.close:hover span {
      rotate: 90deg;
      transition: all 0.3s ease;
    }
    .menu a:hover {
      background-color: #fff;
      color: #000;
    }
  }
</style>
