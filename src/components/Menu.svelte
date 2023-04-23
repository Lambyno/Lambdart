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

  let current_box = -1;

  let box_left = 0;
  let first_time_box_show = true;
  let box_exit = true;

  function mouseenter(e, index) {
    let bounding_box = e.target.getBoundingClientRect();
    current_box = index;
    box_left = bounding_box.left;
    console.log(index);
  }

  function boxmouseleave() {
    let index = current_box;
    setTimeout(() => {
      if (current_box === index) {
        current_box = -1;
      }
    }, 500);
    box_exit = true;
    first_time_box_show = false;
  }

  function menumouseleave(index) {
    first_time_box_show = false;
    setTimeout(() => {
      if (current_box === index && box_exit) {
        current_box = -1;
      }
    }, 100);
  }
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
        ><img src={BioLink.default} alt="BioLink" style="margin-right: 0;" /></a
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
    <div id="menu-container-left">
      <span id="menu-title">FAZAKAS ÁDÁM</span>
    </div>
    <div id="menu-container-middle">
      <span
        class="menu-box-buttons"
        style={current_box === 0 ? "border-left: 1px solid black;" : ""}
        on:click={() => {
          page.set(0);
        }}
        on:mouseenter={(e) => {
          mouseenter(e, 0);
        }}
        on:mouseleave={() => {
          menumouseleave(0);
        }}>&nbsp; concept art &nbsp;</span
      >
      <span
        class="menu-box-buttons"
        style={current_box === 1 ? "border-left: 1px solid black;" : ""}
        on:click={() => {
          page.set(1);
        }}
        on:mouseenter={(e) => {
          mouseenter(e, 1);
        }}
        on:mouseleave={() => {
          menumouseleave(1);
        }}>&nbsp; illustration &nbsp;</span
      >
      <span
        class="menu-box-buttons"
        style={current_box === 2 ? "border-left: 1px solid black;" : ""}
        on:click={() => {
          page.set(2);
        }}
        on:mouseenter={(e) => {
          mouseenter(e, 2);
        }}
        on:mouseleave={() => {
          menumouseleave(2);
        }}>&nbsp; manga &nbsp;</span
      >
      <span
        on:click={() => {
          page.set(3);
        }}>&nbsp; about me</span
      >

      <div
        id="menu-box"
        style={current_box >= 0
          ? first_time_box_show
            ? `left: ${box_left}px; transition: 0s; animation: fadein 1s ease;`
            : `left: ${box_left}px;  animation: fadein 1s ease;`
          : `left: ${box_left}px; visibility: hidden;`}
        on:mouseleave={boxmouseleave}
        on:mouseenter={() => {
          box_exit = false;
        }}
      >
        <span>haha</span>
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

  .menu-box-buttons {
    border-left: 1px solid white;
  }
  .menu-box-buttons:hover {
    border-left: 1px solid black;
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

  #menu-box {
    transition: 0.2s ease;
    width: 150px;
    height: 300px;
    position: absolute;
    background: #000000c9;
    grid-row-start: 2;
    margin-top: 30px;
    border-radius: 3px;
    z-index: 9999;
    box-shadow: 0 7px 10px rgb(0 0 0 / 30%);
    -moz-box-shadow: 0 7px 10px rgb(0 0 0 / 30%);
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
