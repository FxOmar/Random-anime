import "./assets/css/style.css";
import * as Kitsu from "./api/kitsu";
import { randomItemFromArray } from "./utils";
import { AnimeList, Datum } from "./Interfaces/animeList.interface";
import { state } from "./state";

/**
 * Fetch anime collection
 */
function fetchAnimeCollection(): void {
  if (state.nextPage !== null) {
    Kitsu.listAll(state.nextPage).then((response: AnimeList) => {
      state.collection.push(...response.data);

      state.nextPage = response.links.next
        ? response.links.next.match(/[0-9]+$/g)[0]
        : null;
    });
  } else {
    return;
  }
}

/**
 * Call fetchAnimeCollection on the load time.
 */
window.onload = () => fetchAnimeCollection();

function rollRandomAnime(arr: Datum[]) {
  const randomAnime = randomItemFromArray(arr);
  console.log(randomAnime);
}

const bubblyButtons = document.getElementById(
  "bubbly-button"
) as HTMLButtonElement;

bubblyButtons.addEventListener(
  "click",
  async (ev) => {
    fetchAnimeCollection();
    const target = ev.target as HTMLButtonElement;

    ev.preventDefault;

    // reset animation
    target.classList.remove("animate");

    target.classList.add("animate");

    setTimeout(function () {
      target.classList.remove("animate");
    }, 500);

    await rollRandomAnime(state.collection);
  },
  false
);
