import { Datum, AnimeListLinks } from "./Interfaces/animeList.interface";

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

export default state;
