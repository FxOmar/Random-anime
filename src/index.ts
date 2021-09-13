import "./assets/css/style.css";
import "./state";
import fetchAnimeCollection from "./FetchAnime";
import { render } from "lit-html";
import RandomAnime from "./components/RandomAnime";

/**
 * Call fetchAnimeCollection on the load time.
 */
window.onload = () => fetchAnimeCollection();

render(RandomAnime(), document.getElementById("app"));
