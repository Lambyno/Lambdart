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
    Manga2Compressed,
    Manga2,
    Manga3,
    Manga3Compressed,
  } from "./images";
  import { onMount } from "svelte";

  let currentPage = 4;
  let chosen_src = "";
  let chosen_source = Illustrations;
  let chosen_index = 0;
  page.subscribe((val) => {
    currentPage = val;
  });

  let AllArt = [
    ...Illustrations,
    ...CharacterDesign,
    ...Manga1,
    ...Manga2,
    ...Manga3,
  ];
  let AllArtCompressed = [
    ...IllustrationsCompressed,
    ...CharacterDesignCompressed,
    ...Manga1Compressed,
    ...Manga2Compressed,
    ...Manga3Compressed,
  ];

  let show_dialog = false;

  let columns = 10;
  if (checkMobile()) {
    columns = 1;
  }
  onMount(() => {
    if (!checkMobile()) {
      columns = Math.round(window.innerWidth / 200);
      window.addEventListener("resize", () => {
        columns = Math.round(window.innerWidth / 200);
      });
    }
  });
</script>

{#if show_dialog}
  <div id="dialog">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      id="dialog-background"
      on:click={() => {
        show_dialog = false;
      }}
    />
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="dialog-navigation"
      style="left: calc(100vw - 100px); top: calc(50vh - 100px);"
      on:click={() => {
        chosen_src = chosen_source[chosen_index + 1].url;
        chosen_index += 1;
      }}
    >
      <span> {">"} </span>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="dialog-navigation"
      style="left: 50px; top: calc(50vh - 100px);"
      on:click={() => {
        chosen_src = chosen_source[chosen_index - 1].url;
        chosen_index -= 1;
      }}
    >
      <span> {"<"} </span>
    </div>
    <img src={chosen_src} alt={chosen_src} />
  </div>
{/if}

<div id="showcasetype-container">
  {#if !checkMobile() && currentPage != 3}
    <div id="parallax" style={`background-image: url(${ParallaxImage})`} />
  {/if}
  {#if currentPage === 0}
    <div id="photo">
      {#each CharacterDesignCompressed as item, n}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="items"
          in:fly={{ y: -50, duration: 250, delay: 300 }}
          out:fly={{ y: -50, duration: 250 }}
          on:click={() => {
            chosen_src = CharacterDesign[n].url;
            chosen_source = CharacterDesign;
            chosen_index = n;
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
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="items"
          in:fly={{ y: -50, duration: 250, delay: 300 }}
          out:fly={{ y: -50, duration: 250 }}
          on:click={() => {
            chosen_src = Illustrations[n].url;
            chosen_source = Illustrations;
            chosen_index = n;
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
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="items"
          in:fly={{ y: -50, duration: 250, delay: 300 }}
          out:fly={{ y: -50, duration: 250 }}
          on:click={() => {
            chosen_src = Manga1[n].url;
            chosen_source = Manga1;
            chosen_index = n;
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
      id="about-me-container"
    >
      <div
        style={checkMobile()
          ? " display: grid; justify-items: center;"
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
          >HELLO, I AM FAZAKAS ÁDÁM!</span
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
          <a href="https://lambdart.bio.link">CONTACT</a>
          <a href="/Fazakas_Adam_CV.pdf">CV</a>
        </div>

        <br />

        <span
          >Thank you <a
            href="https://github.com/ElhamAryanpur"
            style="text-decoration: none; color: white;"><u>Elham</u></a
          >!</span
        >

        <div
          id="about-me-socials"
          style={checkMobile() ? "" : "display: none;"}
        >
          <a href="https://lambino.artstation.com/"
            ><img
              src="/Icons_Colors_Font/Icons/artstation_icon.svg"
              alt="Artstation"
            /></a
          >
          <a href="https://www.behance.net/dmfazakas1"
            ><img
              src="/Icons_Colors_Font/Icons/be_behance_design_community_portfolio_behance_logo_icon.svg"
              alt="Behance"
            /></a
          >
          <a href="https://instagram.com/lambdart_"
            ><img
              src="/Icons_Colors_Font/Icons/instagram_icon.svg"
              alt="Instagram"
            /></a
          >
          <a href="https://twitter.com/my_lambda"
            ><img
              src="/Icons_Colors_Font/Icons/twitter_bird_icon.svg"
              alt="Twitter"
            /></a
          >
        </div>
      </div>
    </div>
  {:else if currentPage === 4}
    <div
      id="photo"
      style={`-moz-column-count: ${columns}; -webkit-column-count: ${columns}; column-count: ${columns};`}
    >
      {#each AllArtCompressed as item, n}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="items"
          in:fly={{ y: -50, duration: 250, delay: 300 }}
          out:fly={{ y: -50, duration: 250 }}
          on:click={() => {
            chosen_src = AllArt[n].url;
            chosen_source = AllArt;
            chosen_index = n;
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
  {/if}
</div>

<style>
  .items {
    display: grid;
    align-items: center;
    justify-items: center;
    color: white;
    font-family: "Lekton", sans-serif;
    margin: 10px;
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
    box-sizing: border-box;
    background: #323c44;
  }
  #photo {
    -webkit-column-count: 5;
    -webkit-column-gap: 0px;
    -moz-column-count: 5;
    -moz-column-gap: 0px;
    column-count: 8;
    column-gap: 0px;
    width: fit-content;
    padding-top: 10px;
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
  }
  #dialog > img {
    max-width: 80vw;
    max-height: 80vh;
    object-fit: contain;
  }
  #dialog-background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    display: grid;
    align-items: center;
    justify-items: center;
    background: rgba(0, 0, 0, 0.93);
    z-index: -1;
  }
  .dialog-navigation {
    color: white;
    font-size: xxx-large;
    position: fixed;
    height: 100px;
    width: 50px;
    display: grid;
    align-items: center;
    justify-items: center;
    border-radius: 10px;
    transition: 0.25s;
    z-index: 9999;
    user-select: none;
    --webkit-user-select: none;
  }
  .dialog-navigation:hover {
    cursor: pointer;
    background: rgba(56, 56, 56, 0.521);
    transition: 0.25s;
  }

  #about-me-container {
    display: grid;
    justify-items: center;
    align-items: center;
    height: 100%;
    width: 100%;
    margin-top: 50px;
    line-height: 1;
    color: white;
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

  /* media for mobile */
  @media only screen and (max-width: 600px) {
    #photo {
      -webkit-column-count: 1;
      -webkit-column-gap: 0px;
      -moz-column-count: 1;
      -moz-column-gap: 0px;
      column-count: 1;
      column-gap: 0px;
      width: fit-content;
      padding-top: 10px;
      margin: 0 auto 0 auto;
      width: 100%;
    }

    #about-me-socials {
      display: flex;
      gap: 10px;
      margin-top: 20px;
    }
    #about-me-socials img {
      width: 30px;
      height: 30px;
      filter: invert();
    }

    #about-me-container {
      margin-top: 20px;
    }

    #about-me-buttons {
      display: flex;
      justify-content: center;
    }
    #about-me-buttons a {
      text-decoration: none;
      background: white;
      color: black;
      padding: 20px;
      box-sizing: border-box;
      margin: 10px;
      width: 150px;
      text-align: center;
      font-size: x-large;
      font-family: "Barlow", sans-serif;
      border: 5px solid white;
      transition: 0.25s;
    }
  }
</style>
