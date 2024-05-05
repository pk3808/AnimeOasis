import React from "react";
import { Link } from "react-router-dom";

import kidgoku from "../assets/kidgoku.png";

function Explore() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <div className="absolute top-0 left-0 m-4">
        <Link to="/">
       <h1>Back</h1>
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-8">Explore</h1>
      <div className="flex">
        <Link
          to="/AnimeAll"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        >
          Anime
        </Link>
        <Link
          to="/MangaAll"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
        >
          Manga
        </Link>
        <Link
          to="/NovelAll"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Novel
        </Link>
      </div>
      <img src={kidgoku} alt="kidgoku" className="mt-8" width={300} />
    </div>
  );
}

export default Explore;
