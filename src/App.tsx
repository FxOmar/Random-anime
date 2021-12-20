import { RandomAnime } from "./components/RandomAnime";
import { useRandomAnime } from "./hooks/useRandomAnime";

export const App = () => {
  const [randomAnime, getRandomAnime] = useRandomAnime();

  return (
    <div>
      <RandomAnime callback={() => getRandomAnime} />
    </div>
  );
};
