import { Datum, AnimeListLinks } from "./Interfaces/animeList.interface";
import SM from "./SM";

interface StateInterface {
  collection: Datum[];
  links: AnimeListLinks;
  nextPage: string;
}

interface MutationInterface {
  SET_NEXT_PAGE: Function;
  SET_COLLECTION: Function;
}

declare global {
  interface Window {
    Store: any;
  }
}

/**
 * Global state
 */

const Store = new SM({
  state: <StateInterface>{
    collection: [],
    links: {
      first: "",
      next: "",
      last: "",
    },
    nextPage: "0",
  },
  mutation: <MutationInterface>{
    SET_NEXT_PAGE(state: any, payload: String): void {
      state.nextPage = payload;
    },
    SET_COLLECTION(state: any, payload: Datum[]): void {
      state.collection.push(...payload);
    },
  },
});

export default window.Store = Store;
