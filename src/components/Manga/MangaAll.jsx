import bg from "../../assets/bg.png";
import logo from "../../assets/logo.png";
import { mangaData } from "../../services/api";
import MangaCard from "../Manga/MangaCard";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { BsFire } from "react-icons/bs";
import { MdOutlineLocationSearching } from "react-icons/md";
import "../../App.css";
import { background } from "@chakra-ui/react";

const styles = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  position: "relative",
  display: "flex",
};

function MangaAll() {
  const [anime, setAnime] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    fetchData();
  }, [selectedGenre]); // Removed searchQuery from dependencies

  const fetchData = async () => {
    try {
      let data;
      if (searchQuery) {
        data = await mangaData(searchQuery);
      } else if (selectedGenre) {
        data = await mangaData(selectedGenre);
      } else {
        data = await mangaData();
      }
      setAnime(data);
    } catch (error) {
      console.error("Error fetching anime data:", error);
    }
  };
console.log(anime, "anime");
  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setSearchQuery(''); // Reset search query when selecting genre
  };

  const handleSearch = () => {
    fetchData();
  };

  const handlePopularClick = () => {
    setSearchQuery('popularity');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchData();
    }
  };

  return (
    <div style={styles}>
      <div className="absolute top-0 w-full flex items-center px-4 py-2">
        <button className="w-[6%] h-[6%]">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </button>

        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          type="search"
          placeholder="Search your anime"
          className="px-4 py-2 ml-[30%] bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
        />
        <button
          onClick={handleSearch}
          className="ml-[0.1%] px-2 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white cursor-pointer"
        >
          <MdOutlineLocationSearching />
        </button>
        <button
          onClick={handlePopularClick}
          className="ml-[3%] px-2 py-2 flex flex-row items-center bg-pink-700 border border-pink-900 rounded-lg focus:outline-none focus:border-blue-500 text-white cursor-pointer"
        >
          <h1>Most Popular</h1>
          <h1 className="ml-2"><BsFire /></h1>
        </button>
        <div className="ml-[3%] ">
          <select
            onChange={(e) => handleGenreSelect(e.target.value)}
            className="px-4 py-2   bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
          >
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Mystery">Mystery</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Sci-Fi">Mystery</option>
            <option value="Sci-Fi">Drama</option>
            <option value="Sci-Fi">Suspense</option>
            <option value="Sci-Fi">Romance</option>
            <option value="Sci-Fi">Comedy</option>
            <option value="Sci-Fi">Fantsy</option>
            <option value="Sci-Fi">Sports</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
      <div className="mt-[12%] flex flex-wrap justify-center items-center">
        <MangaCard anime={anime} />
      </div>
    </div>
  );
}

export default MangaAll;
