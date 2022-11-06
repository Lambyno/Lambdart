<script>
  import { page } from "./data.store";

  import * as Tupi from "../assets/Tupi_transzparens.png";

  // links
  import * as Twitter from "../assets/Icons_Colors_Font/Icons/twitter.ico";
  import * as Instagram from "../assets/Icons_Colors_Font/Icons/instagram.ico";
  import * as YouTube from "../assets/Icons_Colors_Font/Icons/yotube.ico";
  import * as KoFi from "../assets/Icons_Colors_Font/Icons/ko-fi.svg";
  import * as BioLink from "../assets/Icons_Colors_Font/Icons/bio link.ico";
  import * as Mail from "../assets/Icons_Colors_Font/Icons/mail.svg";
</script>

<div id="menu-container">
  <div id="menu-container-left">
    <img src={Tupi.default} alt="TUPI" /> <br />
    <span id="menu-title">Fazakas Ádám</span>
  </div>
  <div id="menu-container-middle">
    <span
      on:click={() => {
        page.set(0);
      }}>Character Design &nbsp;&nbsp;</span
    >
    <span
      on:click={() => {
        page.set(1);
      }}>Illustrations &nbsp;&nbsp;</span
    >
    <span
      on:click={() => {
        page.set(2);
      }}>Manga &nbsp;&nbsp;</span
    >
    <span
      on:click={() => {
        page.set(3);
      }}>About Me</span
    >
  </div>
  <div id="menu-container-right">
    <div>
      <a href="https://twitter.com/my_lambda"><img src={Twitter.default} alt="Twitter" /></a>
      <a href="https://instagram.com/lambdart_"><img src={Instagram.default} alt="Instagram" /></a>
      <a href="https://www.youtube.com/channel/UCd3vo47GFeIlOjrKQqtmeqQ/featured"><img src={YouTube.default} alt="YouTube" /></a>
      <a href="https://ko-fi.com/mylambda52231"><img src={KoFi.default} alt="KoFi" /></a>
      <a href="https://lambdart.bio.link/"
        ><img src={BioLink.default} alt="BioLink" style="margin-right: 0;" /></a
      >
      <a href="mailto:adamfazakas@yahoo.com" style="margin-left: 10px;"
        ><img src={Mail.default} alt="Mail" /></a
      >
    </div>
  </div>
</div>

<style>
  #menu-container {
    display: grid;
    width: 100%;
    align-items: center;
    grid-column-start: 0;
    background: white;
    color: black;
    align-items: center;
    justify-items: center;
  }
  #menu-container-left {
    display: flex;
    justify-items: center;
    width: 100%;
    padding-left: 50px;
    align-items: center;
  }

  #menu-container-left > img {
    width: 70px;
    height: 100px;
  }

  #menu-container-middle {
    display: flex;
    justify-items: center;
    grid-column-start: 2;
    width: 100%;
  }
  #menu-container-middle > span {
    color: rgb(77, 77, 77);
    font-weight: bold;
    cursor: pointer;
    font-size: x-large;
  }
  #menu-container-middle > span:hover {
    color: black;
  }

  #menu-container-right {
    grid-column-start: 3;
  }

  #menu-container-right > a {
    font-size: larger;
    color: black;
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
    font-weight: bold;
  }

  img {
    width: 150px;
    height: 200px;
  }
</style>
