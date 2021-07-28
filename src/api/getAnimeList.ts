import Http from "../http";
import { AnimeList } from "../Interfaces/animeList.interface";

export async function getAnimeList(): Promise<AnimeList> {
  const { data } = await Http.get("anime");

  return data;
}
