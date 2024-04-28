import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AnimeAll from"./components/AnimeAll";
import MangaAll from"./components/Manga/MangaAll";
function App() {
  return(
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/AnimeAll" element={<AnimeAll />}></Route>
    <Route path="/MangaAll" element={<MangaAll />}></Route>
  </Routes>
  )
}

export default App;
