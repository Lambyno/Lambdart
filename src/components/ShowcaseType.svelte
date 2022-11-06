<script>
  import { page } from "./data.store";

  import * as ParallaxImage from "../assets/Artworks/Illustrations/Parallax.png";

  // Character Design
  import * as c1 from "../assets/Artworks/Character Design/Ava.png";
  import * as c2 from "../assets/Artworks/Character Design/Tupi.png";

  let characterDesign = [c1, c2];

  // Illustrations
  import * as i1 from "../assets/Artworks/Illustrations/Birb.png";
  import * as i2 from "../assets/Artworks/Illustrations/Cold Breeze.png";
  import * as i3 from "../assets/Artworks/Illustrations/Forever change.png";
  import * as i4 from "../assets/Artworks/Illustrations/Summer.png";
  import * as i5 from "../assets/Artworks/Illustrations/Wings.png";

  let illustrations = [i1, i2, i3, i4, i5];

  // Manga
  // p1
  import * as ma1 from "../assets/Artworks/Manga/I_Who Forbids me/1.png";
  import * as ma2 from "../assets/Artworks/Manga/I_Who Forbids me/2.png";
  import * as ma3 from "../assets/Artworks/Manga/I_Who Forbids me/3.png";
  import * as ma4 from "../assets/Artworks/Manga/I_Who Forbids me/4.png";
  import * as ma5 from "../assets/Artworks/Manga/I_Who Forbids me/5.png";
  import * as ma6 from "../assets/Artworks/Manga/I_Who Forbids me/6.png";
  import * as ma7 from "../assets/Artworks/Manga/I_Who Forbids me/7.png";

  // p2
  import * as mb1 from "../assets/Artworks/Manga/II_Whispering fields/1.png";
  import * as mb2 from "../assets/Artworks/Manga/II_Whispering fields/2.png";
  import * as mb3 from "../assets/Artworks/Manga/II_Whispering fields/3.png";
  import * as mb4 from "../assets/Artworks/Manga/II_Whispering fields/4.png";
  import * as mb5 from "../assets/Artworks/Manga/II_Whispering fields/5.png";
  import * as mb6 from "../assets/Artworks/Manga/II_Whispering fields/6.png";
  import * as mb7 from "../assets/Artworks/Manga/II_Whispering fields/7.png";

  // p3
  import * as mc1 from "../assets/Artworks/Manga/III_Reborn/1.png";
  import * as mc2 from "../assets/Artworks/Manga/III_Reborn/2.png";
  import * as mc3 from "../assets/Artworks/Manga/III_Reborn/3.png";
  import * as mc4 from "../assets/Artworks/Manga/III_Reborn/4.png";
  import * as mc5 from "../assets/Artworks/Manga/III_Reborn/5.png";
  import * as mc6 from "../assets/Artworks/Manga/III_Reborn/6.png";
  import * as mc7 from "../assets/Artworks/Manga/III_Reborn/7.png";
  import * as mc8 from "../assets/Artworks/Manga/III_Reborn/8.png";

  let manga = [
    ma1,
    ma2,
    ma3,
    ma4,
    ma5,
    ma6,
    ma7,
    mb1,
    mb2,
    mb3,
    mb4,
    mb5,
    mb6,
    mb7,
    mc1,
    mc2,
    mc3,
    mc4,
    mc5,
    mc6,
    mc7,
    mc8,
  ];

  let currentPage = 0;
  page.subscribe((val) => {
    currentPage = val;
  });
</script>

<div id="showcasetype-container">
  {#if currentPage === 0}
    <div id="parallax" style={`background-image: url(${ParallaxImage.default})`} />
    {#each characterDesign as item}
      <img src={item.default} alt="art" />
    {/each}
  {:else if currentPage === 1}
    <div id="parallax" style={`background-image: url(${ParallaxImage.default})`} />
    {#each illustrations as item}
      <img src={item.default} alt="art" />
    {/each}
  {:else if currentPage === 2}
    <div id="parallax" style={`background-image: url(${ParallaxImage.default})`} />
    {#each manga as item}
      <img src={item.default} alt="art" />
    {/each}
  {:else if currentPage === 3}
    <div
      style="display: grid; justify-items: center; align-items: center; height: 100%; width: 100%; margin-top: 50px;"
    >
      <div style="width: 800px; font-size: x-large;">
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
    {#each illustrations as item}
      <img src={item.default} alt="art" />
    {/each}
  {/if}
</div>

<style>
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
</style>
