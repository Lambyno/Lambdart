<script>
  import { page } from "./data.store";
  import { checkMobile } from "./checkMobile.svelte";
  import { fade } from "svelte/transition";

  let menuOpen = false;
</script>

<div id="top-level-menu-container">
  {#if menuOpen}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span
      id="menu-back"
      on:click={() => {
        menuOpen = false;
      }}
      in:fade={{ duration: 80 }}
      out:fade={{ duration: 80 }}
    >
      {`<`}
    </span>
    <div
      id="menu-display-container-mobile"
      in:fade={{ duration: 80 }}
      out:fade={{ duration: 80 }}
    >
      <div id="menu-display-title-mobile">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span
          id="menu-title"
          style="margin: 0;"
          on:click={() => {
            page.set(4);
            menuOpen = false;
          }}>FAZAKAS ÁDÁM</span
        >
        <br />
        <span
          style="font-family: 'Lekton', sans-serif; font-size: x-large; transform: scale(1, 1.5);"
        >
          Concept artist
        </span>
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span
        on:click={() => {
          page.set(0);
          menuOpen = false;
        }}
        style="align-self: end;">character design</span
      >
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span
        on:click={() => {
          page.set(1);
          menuOpen = false;
        }}>illustrations</span
      >
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span
        on:click={() => {
          page.set(3);
          menuOpen = false;
        }}
        style="align-self: start;">about me</span
      >

      <div style="display: flex; gap: 10px;">
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
  {/if}

  {#if checkMobile()}
    <div id="menu-container-mobile">
      <div style="padding: 20px;">
        <span id="menu-title" style="margin: 0;">FAZAKAS ÁDÁM</span>
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        src="/Icons_Colors_Font/Icons/menu.svg"
        alt="menu"
        style="width: 50px; height: 50px; margin-left: auto; margin-right: 20px;"
        on:click={() => {
          menuOpen = true;
        }}
      />
    </div>
  {:else}
    <div id="menu-container">
      <div style="align-items: end;">
        <div id="menu-container-left">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <span
            id="menu-title"
            on:click={() => {
              page.set(4);
              menuOpen = false;
            }}>FAZAKAS ÁDÁM</span
          >
        </div>
        <div id="menu-container-links">
          <div>
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
      <div style="align-items: center;">
        <div>
          <span
            style="font-family: 'Lekton', sans-serif; font-size: x-large; transform: scale(1, 1.5);"
          >
            Concept artist
          </span>
        </div>
        <div
          id="menu-container-middle"
          style="font-family: 'Lekton', sans-serif; "
        >
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <span
            class="menu-box-buttons"
            on:click={() => {
              page.set(0);
            }}>character design</span
          >
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <span
            class="menu-box-buttons"
            on:click={() => {
              page.set(1);
            }}>illustration</span
          >
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <span
            on:click={() => {
              page.set(3);
            }}>about me</span
          >
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  #top-level-menu-container {
    background: black;
  }
  #menu-display-container-mobile {
    position: fixed;
    z-index: 555;
    background: black;
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-items: center;
    align-items: center;
    color: white;
    font-size: x-large;
    font-weight: bold;
    font-family: "Lekton", sans-serif;
    background: #323c44;
    transition: 0.25s;
  }
  #menu-display-container-mobile > div > a > img {
    width: 30px;
    height: 30px;
  }

  #menu-display-title-mobile {
    padding: 20px;
    background: black;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    padding: 30px;
    box-sizing: border-box;
    align-self: end;
  }

  #menu-container {
    display: grid;
    width: 80%;
    height: 150px;
    background: black;
    color: white;
    box-sizing: border-box;
    align-items: end;
    justify-items: center;
    margin: 0 auto;
  }
  #menu-container > div {
    display: grid;
    width: 100%;
    height: 100%;
  }

  #menu-container-mobile {
    height: 100px;
    background: black;
    color: white;
    box-sizing: border-box;
    justify-content: center;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  #menu-container-left {
    display: flex;
    justify-items: center;
    width: 100%;
    align-items: center;
  }

  #menu-container-middle {
    display: flex;
    justify-items: center;
    justify-content: end;
    margin-right: 40px;
    grid-column-start: 2;
    width: 100%;
    gap: 20px;
  }
  #menu-container-middle > span {
    color: white;
    font-weight: bold;
    cursor: pointer;
    font-size: large;
    letter-spacing: -1px;
    margin-bottom: 20px;
    transition: 0.25s;
  }
  #menu-container-middle > span:hover {
    color: #6e99ff;
    transition: 0.25s;
  }

  #menu-title {
    font-size: xx-large;
    font-weight: bolder;
    color: #6e99ff;
    font-family: "Barlow", sans-serif;
    transform: scale(1, 1.5);
    cursor: pointer;
  }

  #menu-container-links {
    grid-column-start: 2;
    display: flex;
    justify-content: right;
  }
  #menu-container-links > div {
    display: flex;
    gap: 15px;
    transition: 0.25s;
  }
  #menu-container-links > div > a > img {
    filter: invert();
    width: 30px;
    height: 30px;
    transition: 0.25s;
  }

  #menu-container-links > div:hover > a > img {
    filter: invert(80%);
    transition: 0.25s;
  }
  #menu-container-links > div:hover > a > img:hover {
    filter: invert(100%);
    transition: 0.25s;
  }

  #menu-back {
    position: fixed;
    top: 20px;
    left: 20px;
    color: white;
    font-size: xx-large;
    z-index: 999;
    font-weight: bold;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  span {
    font-family: "Space Mono", monospace;
    letter-spacing: -1px;
  }

  img {
    width: 150px;
    height: 200px;
    filter: invert();
  }

  @keyframes fadein {
    0% {
      visibility: visible;
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
</style>
