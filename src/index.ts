import "./assets/css/style.css";
import store from "./state";
import fetchAnimeCollection from "./FetchAnime";
import { render } from "lit-html";
import RandomAnime from "./components/RandomAnime";

/**
 * Call fetchAnimeCollection on the load time.
 */
window.onload = () => fetchAnimeCollection();

store.commit("SET_COLLECTION", "sdfjkhskdjfh");
console.log(store.getState("collection"));
render(RandomAnime(), document.getElementById("app"));
