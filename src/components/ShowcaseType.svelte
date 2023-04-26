<script>
  import { fade } from "svelte/transition";
  import { page } from "./data.store";
  import { checkMobile } from "./checkMobile.svelte";

  import {
    ParallaxImage,
    CharacterDesign,
    Illustrations,
    Manga1,
    Manga1Compressed,
  } from "./images";

  let currentPage = 0;
  let chosen_src = "";
  page.subscribe((val) => {
    currentPage = val;
  });

  let show_dialog = false;
</script>

{#if show_dialog}
  <div
    id="dialog"
    on:click={() => {
      show_dialog = false;
    }}
  >
    <img src={chosen_src} alt={chosen_src} />
  </div>
{/if}

<div
  id="showcasetype-container"
  style={checkMobile() ? "margin-top: 50px;" : ""}
>
  {#if !checkMobile()}
    <div id="parallax" style={`background-image: url(${ParallaxImage})`} />
  {/if}
  {#if currentPage === 0}
    {#each CharacterDesign as item}
      <div
        class="items"
        in:fade={{ duration: 500 }}
        out:fade={{ duration: 250 }}
      >
        <img
          src={item}
          alt="art"
          style={checkMobile()
            ? "max-width: 100vw; max-height: fit-content;"
            : ""}
        />
        <div>
          <span>hey</span>
        </div>
      </div>
    {/each}
  {:else if currentPage === 1}
    {#each Illustrations as item}
      <div in:fade={{ duration: 500 }} out:fade={{ duration: 250 }}>
        <img
          src={item}
          alt="art"
          style={checkMobile()
            ? "max-width: 100vw; max-height: fit-content;"
            : ""}
        />
      </div>
    {/each}
  {:else if currentPage === 2}
    {#each Manga1Compressed as item, n}
      <div
        in:fade={{ duration: 500 }}
        out:fade={{ duration: 250 }}
        on:click={() => {
          chosen_src = Manga1[n];
          show_dialog = true;
        }}
      >
        <img
          src={item}
          alt="art"
          style={checkMobile()
            ? "max-width: 100vw; max-height: fit-content;"
            : ""}
        />
      </div>
    {/each}
  {:else if currentPage === 3}
    <div
      in:fade={{ duration: 500 }}
      out:fade={{ duration: 250 }}
      style="display: grid; justify-items: center; align-items: center; height: 100%; width: 100%; margin-top: 50px;"
    >
      <div style={checkMobile() ? "" : "width: 800px; font-size: x-large;"}>
        <span>Heyho!</span>
        <br /><br />
        <span
          >&nbsp;&nbsp;&nbsp;&nbsp;I'm an aspiring art student in a university
          studying Graphics Art on a masters degree. I also have 4 years of
          basic Visual Arts (sculpting, painting, printmaking, drawing etc.)
          highschool degree with 2 years of graphics art/printmaking
          specialization.
        </span>
        <br /><br />
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;My interests are Character Design, Digital
          Illustration/Painting in the style of mixing anime/manga styles with
          realism/semi-realism and making manga. I tend to be experimental at
          times and I'm open to different art styles.
        </span>
        <br /><br />
        <span
          >&nbsp;&nbsp;&nbsp;&nbsp;Currently I'm trying to improve as much as I
          can; build relationships, do commissions/freelance jobs and keep
          adding to my portfolio to make it look as professional as I can.
        </span>
        <br /><br />
        <span>Thank you for visiting my page, I appreciate it a lot! </span>
      </div>
    </div>
  {:else}
    {#each Illustrations as item}
      <img src={item} alt="art" />
    {/each}
  {/if}
</div>

<style>
  .items {
    display: grid;
    align-items: center;
    justify-items: center;
    color: white;
  }
  .items > div {
    position: absolute;
    display: none;
  }
  .items:hover > img {
    filter: brightness(20%);
    transition: 0.3s ease;
  }
  .items:hover > div {
    display: unset;
  }

  #showcasetype-container {
    padding: 10px;
    padding-top: 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  img {
    cursor: pointer;
    display: block;
    max-height: 400px;
    max-width: 400px;
    width: auto;
    height: auto;
    object-fit: contain;
  }

  #parallax {
    width: 100%;
    min-height: 300px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  #dialog {
    position: fixed;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    z-index: 9999;
    display: grid;
    align-items: center;
    justify-items: center;
    background: rgba(0, 0, 0, 0.93);
  }

  #dialog > img {
    max-width: 80vw;
    max-height: 80vh;
    object-fit: contain;
  }
</style>
