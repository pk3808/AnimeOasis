import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AnimeAll from"./components/Anime/AnimeAll";
import MangaAll from"./components/Manga/MangaAll";
import NovelAll from "./components/Novel/NovelAll";
import Explore from "./components/Explore";
import About from "./components/About";
function App() {
  return(
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/AnimeAll" element={<AnimeAll />}></Route>
    <Route path="/MangaAll" element={<MangaAll />}></Route>
    <Route path="/NovelAll" element={<NovelAll />}></Route>
    <Route path="/Explore" element={<Explore />}></Route>
    <Route path="/About" element={<About />}></Route>
  </Routes>
  )
}

export default App;
