import { Datum, AnimeListLinks } from "./Interfaces/animeList.interface";
import SM from "./SM";

interface StateInterface {
  collection: Datum[];
  links: AnimeListLinks;
  nextPage: string;
}

declare global {
  interface Window {
    state: StateInterface;
  }
}

/**
 * Global state
 */

const store = new SM({
  state: <StateInterface>{
    collection: [],
    links: {
      first: "",
      next: "",
      last: "",
    },
    nextPage: "0",
  },
  mutation: {
    SET_COLLECTION(state: any, payload: any): void {
      state.collection = payload;
    },
  },
});

export default store;
