<script>
  import { page } from "./data.store";
  import { checkMobile } from "./checkMobile.svelte";
  import { fade } from "svelte/transition";

  import * as Tupi from "../assets/Tupi_transzparens.png";

  // links
  import * as Twitter from "../assets/Icons_Colors_Font/Icons/twitter.ico";
  import * as Instagram from "../assets/Icons_Colors_Font/Icons/instagram.ico";
  import * as YouTube from "../assets/Icons_Colors_Font/Icons/yotube.ico";
  import * as KoFi from "../assets/Icons_Colors_Font/Icons/ko-fi.svg";
  import * as BioLink from "../assets/Icons_Colors_Font/Icons/bio link.ico";
  import * as Mail from "../assets/Icons_Colors_Font/Icons/mail.svg";
  import * as Menu from "../assets/Icons_Colors_Font/Icons/menu.svg";

  let menuOpen = false;
</script>

{#if menuOpen}
  <div
    id="menu-container-mobile"
    in:fade={{ duration: 80 }}
    out:fade={{ duration: 80 }}
  >
    <span
      on:click={() => {
        page.set(0);
        menuOpen = false;
      }}>Character Design</span
    >
    <span
      on:click={() => {
        page.set(1);
        menuOpen = false;
      }}>Illustrations</span
    >
    <span
      on:click={() => {
        page.set(2);
        menuOpen = false;
      }}>Manga</span
    >
    <span
      on:click={() => {
        page.set(3);
        menuOpen = false;
      }}>About Me</span
    >

    <!--<div>
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
        ><img src={BioLink.default} alt="BioLink" style="margin-right: 0;" /></a
      >
      <a href="mailto:adamfazakas@yahoo.com"
        ><img src={Mail.default} alt="Mail" /></a
      >
    </div>-->
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
    <img
      src={Menu.default}
      alt="menu"
      style="width: 50px; height: 50px; margin-left: 10px;"
      on:click={() => {
        menuOpen = true;
      }}
    />
  </div>
{:else}
  <div id="menu-container">
    <div id="menu-container-left">
      <span id="menu-title">FAZAKAS ÁDÁM</span>
    </div>
    <div id="menu-container-middle">
      <span
        on:click={() => {
          page.set(0);
        }}>concept art &nbsp;&nbsp;</span
      >
      <span
        on:click={() => {
          page.set(1);
        }}>illustration &nbsp;&nbsp;</span
      >
      <span
        on:click={() => {
          page.set(2);
        }}>manga &nbsp;&nbsp;</span
      >
      <span
        on:click={() => {
          page.set(3);
        }}>about me</span
      >
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

<style>
  #menu-container-mobile {
    position: fixed;
    z-index: 555;
    background: white;
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-items: center;
    align-items: center;
  }

  #menu-container-mobile > span {
    font-size: xx-large;
  }

  #menu-container-mobile > div > a > img {
    width: 50px;
    height: 50px;
  }

  #menu-container {
    display: grid;
    width: 80%;
    height: 150px;
    background: white;
    color: black;
    box-sizing: border-box;
    align-items: end;
    justify-items: center;
    margin: 0 auto;
    border-bottom: 1px solid black;
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
  }
  #menu-container-middle > span {
    color: rgb(77, 77, 77);
    font-weight: bold;
    cursor: pointer;
    font-size: large;
    letter-spacing: -1px;
    margin-bottom: 20px;
  }
  #menu-container-middle > span:hover {
    color: black;
  }

  #menu-container-right {
    grid-column-start: 3;
  }

  #menu-container-right > div > a > img {
    width: 30px;
    height: 30px;
    margin-right: 15px;
    opacity: 75%;
  }
  #menu-container-right > div > a > img:hover {
    opacity: 100%;
  }

  #menu-title {
    font-size: xx-large;
    margin-left: 20px;
    font-weight: bolder;
    margin-bottom: 30px;
  }

  span {
    font-family: "Space Mono", monospace;
    letter-spacing: -1px;
  }

  img {
    width: 150px;
    height: 200px;
  }
</style>
