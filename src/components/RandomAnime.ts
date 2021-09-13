import { html } from "lit-html";
import { randomItemFromArray } from "./../utils";
import { Datum } from "./../interfaces/animeList.interface";
import fetchAnimeCollection from "../FetchAnime";

function rollRandomAnime(arr: Datum[]) {
  const randomAnime = randomItemFromArray(arr);
  console.log(randomAnime);
}

const randomAnime = async (ev: {
  target: HTMLButtonElement;
  preventDefault: any;
}) => {
  fetchAnimeCollection();
  const target = ev.target as HTMLButtonElement;

  ev.preventDefault;

  // reset animation
  target.classList.remove("animate");

  target.classList.add("animate");

  setTimeout(function () {
    target.classList.remove("animate");
  }, 500);

  await rollRandomAnime(window.state.collection);
};

export default () =>
  html`<button @click=${randomAnime} id="bubbly-button">
    Roll a random anime
  </button>`;
