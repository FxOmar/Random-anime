import "./assets/css/style.css";
import * as Kitsu from "./api/kitsu";
import {
  AnimeList,
  Datum,
  AnimeListLinks,
} from "./Interfaces/animeList.interface";

interface StateInterface {
  collection: Datum[];
  links: AnimeListLinks;
  nextPage: string;
}

/**
 * Global state
 */
let state: StateInterface = {
  collection: [],
  links: {
    first: "",
    next: "",
    last: "",
  },
  nextPage: "0",
};

/**
 * Fetch anime collection
 */
function fetchAnimeCollection() {
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
 * Get random element from an array.
 * @param arr Array
 */
function randomItemFromArray<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function rollRandomAnime(arr: Datum[]) {
  const randomAnime = randomItemFromArray(arr);
  console.log(randomAnime);
}

const bubblyButtons = document.getElementById(
  "bubbly-button"
) as HTMLButtonElement;

bubblyButtons.addEventListener(
  "click",
  function (ev) {
    const target = ev.target as HTMLButtonElement;

    ev.preventDefault;

    // reset animation
    target.classList.remove("animate");

    target.classList.add("animate");

    setTimeout(function () {
      target.classList.remove("animate");
    }, 500);

    rollRandomAnime(state.collection);
    fetchAnimeCollection();
  },
  false
);
