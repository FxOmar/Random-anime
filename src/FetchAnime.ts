import * as Kitsu from "./api/kitsu";
import { AnimeList } from "./Interfaces/animeList.interface";

/**
 * Fetch anime collection
 */
function fetchAnimeCollection(): void {
  const Store = window.Store;
  const nextPage = Store.mapState("nextPage");

  if (nextPage !== null) {
    Kitsu.listAll(nextPage).then((response: AnimeList) => {
      Store.commit("SET_COLLECTION", response.data);

      Store.commit(
        "SET_NEXT_PAGE",
        response.links.next ? response.links.next.match(/[0-9]+$/g)[0] : null
      );
    });
  } else {
    return;
  }
}

export default fetchAnimeCollection;
