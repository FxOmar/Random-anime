import { useEffect, useState } from "react";
import { listAll } from "../api/kitsu";
import { Datum } from "../Interfaces/animeList.interface";
import { randomItemFromArray } from "../utils";

export function useRandomAnime() {
  const [nextPage, setNextPage] = useState<string | null>("0");
  const [animeCollection, setAnimeCollection] = useState<Datum[]>([]);
  const [randomAnime, setRandomAnime] = useState<Datum | never[]>([]);

  /**
   * Fetch anime collection
   */
  async function getAnimeCollection() {
    if (nextPage !== null) {
      const { data, links } = await listAll(nextPage);

      setAnimeCollection([...animeCollection, ...data]);

      const parseNextPage = links.next
        ? links.next.match(/[0-9]+$/g)![0]
        : null;

      setNextPage(parseNextPage);
    } else {
      return;
    }
  }

  function rollRandomAnime(collection: Datum[]) {
    const anime = randomItemFromArray(collection);
    setRandomAnime(anime);
  }

  const getRandomAnime = async () => {
    await getAnimeCollection();

    await rollRandomAnime(animeCollection);
  };

  useEffect(() => {
    getRandomAnime();
  }, []);

  return [randomAnime, getRandomAnime];
}
