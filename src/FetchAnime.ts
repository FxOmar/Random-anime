import * as Kitsu from "./api/kitsu";
import { AnimeList } from "./Interfaces/animeList.interface";

/**
 * Fetch anime collection
 */
function fetchAnimeCollection(): void {
  if (window.state.nextPage !== null) {
    Kitsu.listAll(window.state.nextPage).then((response: AnimeList) => {
      window.state.collection.push(...response.data);

      window.state.nextPage = response.links.next
        ? response.links.next.match(/[0-9]+$/g)[0]
        : null;
    });
  } else {
    return;
  }
}

export default fetchAnimeCollection;
