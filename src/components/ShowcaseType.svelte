<script>
  import { crossfade } from "svelte/transition";
  import { page } from "./data.store";
  import { checkMobile } from "./checkMobile.svelte";

  import {
    ParallaxImage,
    CharacterDesign,
    Illustrations,
    Manga1,
    Manga1Compressed,
    IllustrationsCompressed,
    CharacterDesignCompressed,
  } from "./images";

  const [send, receive] = crossfade({ duration: 250 });
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
  {#if !checkMobile() && currentPage != 3}
    <div id="parallax" style={`background-image: url(${ParallaxImage})`} />
  {/if}
  {#if currentPage === 0}
    {#each CharacterDesignCompressed as item, n}
      <div
        class="items"
        out:send={{ key: "a" }}
        in:receive={{ key: "a" }}
        on:click={() => {
          chosen_src = CharacterDesign[n];
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
        <div>
          <span>hey</span>
        </div>
      </div>
    {/each}
  {:else if currentPage === 1}
    {#each IllustrationsCompressed as item, n}
      <div
        class="items"
        out:send={{ key: "a" }}
        in:receive={{ key: "a" }}
        on:click={() => {
          chosen_src = Illustrations[n];
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
        <div>
          <span>hey</span>
        </div>
      </div>
    {/each}
  {:else if currentPage === 2}
    {#each Manga1Compressed as item, n}
      <div
        class="items"
        out:send={{ key: "a" }}
        in:receive={{ key: "a" }}
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
        <div>
          <span>hey</span>
        </div>
      </div>
    {/each}
  {:else if currentPage === 3}
    <div
      out:send={{ key: "a" }}
      in:receive={{ key: "a" }}
      style="display: grid; justify-items: center; align-items: center; height: 100%; width: 100%; margin-top: 50px;"
    >
      <div
        style={checkMobile()
          ? ""
          : "width: 800px; font-size: x-large; display: grid; justify-items: center;"}
      >
        <img
          src="/Tupi_transparent.png"
          alt="icon"
          style="width: 300px; height: 300px;"
        />
        <br /><br />
        <span
          >As someone who naturally gravitates towards introspection, I have
          always loved the process of creation. Pursuing this passion, I
          dedicated myself to studying art and improving my skills as an
          aspiring artist through art education. My artistic interests lie in
          the realms of concept art, illustration, and manga. I strive to be
          unique in my approach, blending my technical abilities with my
          imagination to produce visually engaging concepts and images. I enjoy
          experimenting and pushing my artistic boundaries to achieve new levels
          of creativity.
        </span>
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
