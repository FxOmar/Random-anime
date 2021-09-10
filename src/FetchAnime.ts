import * as Kitsu from "./api/kitsu";
import { AnimeList } from "./Interfaces/animeList.interface";
import state from "./state";

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

export default fetchAnimeCollection;
