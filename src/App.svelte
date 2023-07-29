<script>
  import * as favicon from "/Tupi_transparent.png";
  // Components
  import Menu from "./components/Menu.svelte";
  import ShowcaseType from "./components/ShowcaseType.svelte";
</script>

<main>
  <Menu />
  <ShowcaseType />
</main>

<svelte:head>
  <link rel="icon" href={favicon.default} />
</svelte:head>

<style>
  main {
    display: grid;
  }
</style>
