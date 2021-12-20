import Http from "./http";
import type { AnimeList } from "./../Interfaces/animeList.interface";

export async function listAll(page: string): Promise<AnimeList> {
  const { data } = await Http.get<AnimeList>(
    `anime?page[limit]=20&page[offset]=${parseInt(page)}`
  );

  return data;
}
