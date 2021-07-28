import Http from "./http";
import { AnimeList } from "../interfaces/animeList.interface";

export async function listAll(page: string): Promise<AnimeList> {
  const { data } = await Http.get(
    `anime?page[limit]=20&page[offset]=${parseInt(page)}`
  );

  return data;
}
