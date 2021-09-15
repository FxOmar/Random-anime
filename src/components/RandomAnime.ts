import { html } from "lit-html";
import { randomItemFromArray } from "./../utils";
import { Datum } from "./../interfaces/animeList.interface";
import fetchAnimeCollection from "../FetchAnime";

const animeList: Datum[] = JSON.parse(
  localStorage.getItem("YOUR_RANDOM_ANIME_LIST")
);

window.onbeforeunload = function () {
  localStorage.setItem("YOUR_RANDOM_ANIME_LIST", JSON.stringify(animeList));
};

function rollRandomAnime(arr: Datum[]) {
  const randomAnime = randomItemFromArray(arr);
  animeList.push(randomAnime);
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

  const collection = window.Store.mapState("collection");

  await rollRandomAnime(collection);
};

export default () =>
  html`<button @click=${randomAnime} id="bubbly-button">
    Roll a random anime
  </button>`;
