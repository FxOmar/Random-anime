import "./assets/css/style.css";
import fetchAnimeCollection from "./FetchAnime";
import { render, html } from "lit-html";
import RandomAnime from "./components/RandomAnime";
import "./Store";

/**
 * Call fetchAnimeCollection on the load time.
 */
window.onload = () => fetchAnimeCollection();

const APP = () => html` ${RandomAnime()}`;

render(APP(), document.getElementById("app"));
