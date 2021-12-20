import buttonCss from "../assets/css/button.module.css";
import { FC, useRef } from "react";

export const RandomAnime: FC<{ callback: Function }> = ({ callback }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  function handleButtonClick() {
    const target = buttonRef.current;
    if (target) {
      // reset animation
      target.classList.remove("animate");

      target.classList.add("animate");

      setTimeout(function () {
        target.classList.remove("animate");
      }, 500);
    }
  }

  return (
    <button
      id={buttonCss["bubbly-button"]}
      ref={buttonRef}
      onClick={(handleButtonClick(), callback())}
    >
      Roll a random anime
    </button>
  );
};

// const newLocal = "YOUR_RANDOM_ANIME_LIST";

// const animeList: Datum[] | null =
//   JSON.parse(localStorage.getItem(newLocal)) || [];

// window.onbeforeunload = function () {
//   localStorage.setItem("newLocal", JSON.stringify(animeList));
// };

// function rollRandomAnime(arr: Datum[]) {
//   const randomAnime = randomItemFromArray(arr);
//   animeList.push(randomAnime);
// }

// const randomAnime = async (ev: {
//   target: HTMLButtonElement;
//   preventDefault: any;
// }) => {
//   fetchAnimeCollection();
//   const target = ev.target as HTMLButtonElement;

//   ev.preventDefault;

//   // reset animation
//   target.classList.remove("animate");

//   target.classList.add("animate");

//   setTimeout(function () {
//     target.classList.remove("animate");
//   }, 500);

//   const collection = window.Store.mapState("collection");

//   await rollRandomAnime(collection);
//   console.log(animeList);
// };
