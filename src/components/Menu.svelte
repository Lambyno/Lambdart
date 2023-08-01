<script>
  import { page } from "./data.store";
  import { checkMobile } from "./checkMobile.svelte";
  import { fade } from "svelte/transition";

  // links
  import * as YouTube from "/Icons_Colors_Font/Icons/yotube.ico";
  import * as KoFi from "/Icons_Colors_Font/Icons/ko-fi.svg";
  import * as BioLink from "/Icons_Colors_Font/Icons/bio link.ico";
  import * as Mail from "/Icons_Colors_Font/Icons/mail.svg";
  import * as Menu from "/Icons_Colors_Font/Icons/menu.svg";

  let menuOpen = false;
</script>

<div id="top-level-menu-container">
  {#if menuOpen}
    <div
      id="menu-container-mobile"
      in:fade={{ duration: 80 }}
      out:fade={{ duration: 80 }}
    >
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span
        on:click={() => {
          page.set(0);
          menuOpen = false;
        }}>Character Design</span
      >
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span
        on:click={() => {
          page.set(1);
          menuOpen = false;
        }}>Illustrations</span
      >
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span
        on:click={() => {
          page.set(3);
          menuOpen = false;
        }}>About Me</span
      >

      <div>
        <a href="https://twitter.com/my_lambda"
          ><img
            src="/Icons_Colors_Font/Icons/twitter_bird_icon.svg"
            alt="Twitter"
          /></a
        >
        <a href="https://instagram.com/lambdart_"
          ><img
            src="/Icons_Colors_Font/Icons/instagram_icon.svg"
            alt="Instagram"
          /></a
        >
        <a
          href="https://www.youtube.com/channel/UCd3vo47GFeIlOjrKQqtmeqQ/featured"
          ><img src={YouTube.default} alt="YouTube" /></a
        >
        <a href="https://ko-fi.com/mylambda52231"
          ><img src={KoFi.default} alt="KoFi" /></a
        >
        <a href="https://lambdart.bio.link/"
          ><img
            src={BioLink.default}
            alt="BioLink"
            style="margin-right: 0;"
          /></a
        >
        <a href="mailto:adamfazakas@yahoo.com"
          ><img src={Mail.default} alt="Mail" /></a
        >
      </div>
    </div>
  {/if}

  {#if checkMobile()}
    <div
      id="menu-container"
      style="display: flex; justify-content: center; position:fixed;"
    >
      <div style="padding: 10px;">
        <span id="menu-title" style="margin: 0;">FAZAKAS ÁDÁM</span>
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        src={Menu.default}
        alt="menu"
        style="50px; height: 50px; margin-left: 10px;"
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
      <!--<div id="menu-container-right">
      <div>
        <a href="https://twitter.com/my_lambda"
          ><img src={Twitter.default} alt="Twitter" /></a
        >
        <a href="https://instagram.com/lambdart_"
          ><img src={Instagram.default} alt="Instagram" /></a
        >
        <a
          href="https://www.youtube.com/channel/UCd3vo47GFeIlOjrKQqtmeqQ/featured"
          ><img src={YouTube.default} alt="YouTube" /></a
        >
        <a href="https://ko-fi.com/mylambda52231"
          ><img src={KoFi.default} alt="KoFi" /></a
        >
        <a href="https://lambdart.bio.link/"
          ><img
            src={BioLink.default}
            alt="BioLink"
            style="margin-right: 0;"
          /></a
        >
        <a href="mailto:adamfazakas@yahoo.com" style="margin-left: 10px;"
          ><img src={Mail.default} alt="Mail" /></a
        >
      </div>
    </div>-->
    </div>
  {/if}
</div>

<style>
  #top-level-menu-container {
    background: black;
  }
  #menu-container-mobile {
    position: fixed;
    z-index: 555;
    background: black;
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-items: center;
    align-items: center;
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

  span {
    font-family: "Space Mono", monospace;
    letter-spacing: -1px;
  }

  img {
    width: 150px;
    height: 200px;
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
