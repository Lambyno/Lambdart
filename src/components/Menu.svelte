<script>
  import * as Tupi from "../assets/Tupi_transzparens.png";

  // links
  import * as Twitter from "../assets/Icons_Colors_Font/Icons/twitter.ico";
  import * as Instagram from "../assets/Icons_Colors_Font/Icons/instagram.ico";
  import * as YouTube from "../assets/Icons_Colors_Font/Icons/yotube.ico";
  import * as KoFi from "../assets/Icons_Colors_Font/Icons/ko-fi.svg";
  import * as BioLink from "../assets/Icons_Colors_Font/Icons/bio link.ico";
</script>

<div id="menu-container">
  <div id="menu-container-top">
    <img src={Tupi.default} alt="TUPI" /> <br />
    <span id="menu-title">Fazakas Ádám</span>
  </div>
  <div id="menu-container-middle">
    <span>About Me</span>
    <span>Portfolio</span>
    <span>Manga</span>
    <span>Shop</span>
  </div>
  <div id="menu-container-bottom">
    <a href="mailto:adamfazakas@yahoo.com">adamfazakas@yahoo.com</a>
    <div>
      <a href="#"><img src={Twitter.default} alt="Twitter" /></a>
      <a href="#"><img src={Instagram.default} alt="Instagram" /></a>
      <a href="#"><img src={YouTube.default} alt="YouTube" /></a>
      <a href="#"><img src={KoFi.default} alt="KoFi" /></a>
      <a href="#"
        ><img src={BioLink.default} alt="BioLink" style="margin-right: 0;" /></a
      >
    </div>
  </div>
</div>

<style>
  #menu-container {
    width: 250px;
    grid-area: menu;
    display: grid;
    padding-left: 50px;
    padding-right: 50px;
    align-items: center;
    grid-column-start: 0;
    background: white;
    color: black;
    height: 100vh;
    box-shadow: 10px 0px 20px 12px rgb(210, 210, 210);
    align-items: center;
    justify-items: center;
  }
  #menu-container-top {
    display: grid;
    justify-items: center;
  }
  #menu-container-middle {
    display: grid;
    justify-items: center;
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

  #menu-container-bottom > a {
    font-size: larger;
    color: black;
  }
  #menu-container-bottom > div > a > img {
    width: 30px;
    height: 30px;
    margin-right: 15px;
    opacity: 75%;
  }
  #menu-container-bottom > div > a > img:hover {
    opacity: 100%;
  }

  #menu-title {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: xx-large;
  }

  img {
    width: 150px;
    height: 200px;
  }
</style>
