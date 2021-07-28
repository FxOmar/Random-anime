import Http from "./http";
import { AnimeList } from "../interfaces/animeList.interface";

export async function listAll(): Promise<AnimeList> {
  const { data } = await Http.get("anime");
  return data;
}
