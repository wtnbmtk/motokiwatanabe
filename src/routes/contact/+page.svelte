<script>
  import { PUBLIC_NEWT_FORM_ENDPOINT } from "$env/static/public";
</script>

<svelte:head>
  <title>Newt・SvelteKitフォーム</title>
  <meta
    name="description"
    content="NewtとSvelteKitを利用した問い合わせフォームです"
  />
</svelte:head>

<div class="contain">
  <h1>CONTACT</h1>
  <div class="inner">
    <form action={PUBLIC_NEWT_FORM_ENDPOINT} method="post">
      <label for="name">Name</label>
      <input id="name" name="name" size={80} />
      <label for="email">Email</label>
      <input id="email" name="email" type="email" size={80} />
      <label for="message">Message</label>
      <textarea id="message" name="message" rows={10} cols={100} />
      <button type="submit">Submit</button>
    </form>
  </div>
</div>

<style>
  label:nth-child(n + 2) {
    display: block;
    margin: 1rem 0 0;
  }
  button {
    position: relative;
    font-size: 1rem;
    margin: 1rem 0 8px;
    color: white;
  }
  button::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    height: 1px;
    width: 100px;
    background-color: #fff;
  }
  button::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -3px;
    left: 100px;
    height: 1px;
    width: 30px;
    background-color: #fff;
    transform-origin: 0% 0%;
    transform: rotate(-150deg);
  }
  .mail {
    color: #333;
  }
  .mail svg {
    position: relative;
    inset: 2px 0;
    margin: auto;
  }
</style>
