<script>
  import { fly } from "svelte/transition";
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
    <div id="photo">
      {#each CharacterDesignCompressed as item, n}
        <div
          class="items"
          in:fly={{ y: -50, duration: 250, delay: 300 }}
          out:fly={{ y: -50, duration: 250 }}
          on:click={() => {
            chosen_src = CharacterDesign[n].url;
            show_dialog = true;
          }}
        >
          <img
            src={item.url}
            alt="art"
            style={checkMobile()
              ? "max-width: 100vw; max-height: fit-content;"
              : ""}
          />
          <div>
            <span>{item.name}</span>
          </div>
        </div>
      {/each}
    </div>
  {:else if currentPage === 1}
    <div id="photo">
      {#each IllustrationsCompressed as item, n}
        <div
          class="items"
          in:fly={{ y: -50, duration: 250, delay: 300 }}
          out:fly={{ y: -50, duration: 250 }}
          on:click={() => {
            chosen_src = Illustrations[n].url;
            show_dialog = true;
          }}
        >
          <img
            src={item.url}
            alt="art"
            style={checkMobile()
              ? "max-width: 100vw; max-height: fit-content;"
              : ""}
          />
          <div>
            <span>{item.name}</span>
          </div>
        </div>
      {/each}
    </div>
  {:else if currentPage === 2}
    <div id="photo">
      {#each Manga1Compressed as item, n}
        <div
          class="items"
          in:fly={{ y: -50, duration: 250, delay: 300 }}
          out:fly={{ y: -50, duration: 250 }}
          on:click={() => {
            chosen_src = Manga1[n].url;
            show_dialog = true;
          }}
        >
          <img
            src={item.url}
            alt="art"
            style={checkMobile()
              ? "max-width: 100vw; max-height: fit-content;"
              : ""}
          />
          <div>
            <span>{item.name}</span>
          </div>
        </div>
      {/each}
    </div>
  {:else if currentPage === 3}
    <div
      in:fly={{ y: -50, duration: 250, delay: 300 }}
      out:fly={{ y: -50, duration: 250 }}
      style="display: grid; justify-items: center; align-items: center; height: 100%; width: 100%; margin-top: 50px; line-height: 1; color: white;"
    >
      <div
        style={checkMobile()
          ? ""
          : "width: 1000px; font-size: x-large; display: grid; justify-items: center;"}
      >
        <img
          src="/Tupi_transparent.png"
          alt="icon"
          style="width: 200px; height: 200px;"
        />
        <br />
        <span
          style="background: black; width: 100%; padding: 20px; text-align: center; box-sizing: border-box; font-family: 'Barlow', sans-serif; font-size: x-large;"
          >HELLO, I AM FAZAKAS ÁDÁM!'</span
        >
        <p
          style="text-align: justify; width: 100%; font-family: 'Lekton', sans-serif; text-align-last: center;"
        >
          Driven by a deep passion for artistic expression, I decided to pursue
          art education. My focus lies primarily in concept art and
          illustration, where I aim to bring my own unique touch by blending my
          technical skills with my imagination to make really captivating and
          eye-catching concepts and images. I consistently challenge myself
          through experimentation, seeking to enhance my creative abilities and
          push the boundaries of my artistic endeavors.
        </p>

        <div id="about-me-buttons">
          <a href="#">CONTACT</a>
          <a href="#">CV</a>
        </div>

        <br />

        <span
          >Thank you <a
            href="https://github.com/ElhamAryanpur"
            style="text-decoration: none; color: white;"><u>Elham</u></a
          >!</span
        >
      </div>
    </div>
  {:else}
    {#each Illustrations as item}
      <img src={item.url} alt="art" />
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
    line-height: 0;
  }
  #photo {
    -webkit-column-count: 5;
    -webkit-column-gap: 0px;
    -moz-column-count: 5;
    -moz-column-gap: 0px;
    column-count: 5;
    column-gap: 0px;
  }

  #photo img {
    width: 100% !important;
    height: auto !important;
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

  #about-me-buttons {
    display: flex;
  }
  #about-me-buttons a {
    text-decoration: none;
    background: white;
    color: black;
    padding: 30px;
    box-sizing: border-box;
    margin: 10px;
    width: 200px;
    text-align: center;
    font-size: x-large;
    font-family: "Barlow", sans-serif;
    border: 5px solid white;
    transition: 0.25s;
  }
  #about-me-buttons a:hover {
    background: transparent;
    color: white;
    transition: 0.25s;
  }

  @media (max-width: 1200px) {
    #photo {
      -moz-column-count: 4;
      -webkit-column-count: 4;
      column-count: 4;
    }
  }
  @media (max-width: 1000px) {
    #photo {
      -moz-column-count: 3;
      -webkit-column-count: 3;
      column-count: 3;
    }
  }
  @media (max-width: 800px) {
    #photo {
      -moz-column-count: 2;
      -webkit-column-count: 2;
      column-count: 2;
    }
  }
  @media (max-width: 400px) {
    #photo {
      -moz-column-count: 1;
      -webkit-column-count: 1;
      column-count: 1;
    }
  }
</style>
