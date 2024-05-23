import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { BsFire } from "react-icons/bs";
import { MdOutlineLocationSearching } from "react-icons/md";
import { GiAbstract050 } from "react-icons/gi";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import bg from "../../assets/whitebg.jpg";
import logo from "../../assets/logo.png";
import { animeData } from "../../services/api";
import AnimeCard from "./AnimeCard";
import "../../App.css";

const styles = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  position: "relative",
  display: "flex",
};

function AnimeAll() {
  const [anime, setAnime] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  useEffect(() => {
    fetchData();
  }, [selectedGenre]); // Removed searchQuery from dependencies

  const fetchData = async () => {
    try {
      let data;
      if (searchQuery) {
        data = await animeData(searchQuery);
      } else if (selectedGenre) {
        data = await animeData(selectedGenre);
      } else if (searchQuery === 'popularity') { // Check if user wants popular anime
        data = await animeData('', 'popularity');
      } else {
        data = await animeData();
      }
      setAnime(data);
    } catch (error) {
      console.error("Error fetching anime data:", error);
    }
  };

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
      <div className="absolute top-0 w-full flex items-center px-4 py-2 justify-between">
        <button className="w-[14%] h-[14%] lg:w-[6%] lg:h-[6%]">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </button>

        {isLargerThan800 ? (
          <div className="flex items-center w-full justify-center">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              type="search"
              placeholder="Search your anime"
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
            />
            <button
              onClick={handleSearch}
              className="ml-2 px-2 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white cursor-pointer"
            >
              <MdOutlineLocationSearching />
            </button>
            <button
              onClick={handlePopularClick}
              className="ml-3 px-2 py-2 flex flex-row items-center bg-pink-700 border border-pink-900 rounded-lg focus:outline-none focus:border-blue-500 text-white cursor-pointer"
            >
              <h1>Most Popular</h1>
              <h1 className="ml-2"><BsFire /></h1>
            </button>
            <div className="ml-3">
              <select
                onChange={(e) => handleGenreSelect(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              >
                <option value="">Select Genre</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Mystery">Mystery</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Drama">Drama</option>
                <option value="Suspense">Suspense</option>
                <option value="Romance">Romance</option>
                <option value="Comedy">Comedy</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Sports">Sports</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
        ) : (
          <Button ref={btnRef}  onClick={onOpen}>
         <GiAbstract050  color="#CA385C" size={30}/>
          </Button>
        )}
      </div>
      {!isLargerThan800 && (
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <div className="w-full flex flex-row mb-2">
                <input
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  type="search"
                  placeholder="Search your anime"
                  className="px-4 py-2 w-[85%] bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                />
                <button
                  onClick={handleSearch}
                  className="w-[15%] px-2 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white cursor-pointer"
                >
                  <MdOutlineLocationSearching />
                </button>
              </div>
              <button
                onClick={handlePopularClick}
                className="w-full mt-2 px-2 py-2 flex flex-row items-center bg-pink-700 border border-pink-900 rounded-lg focus:outline-none focus:border-blue-500 text-white cursor-pointer"
              >
                <h1>Most Popular</h1>
                <h1 className="ml-2"><BsFire /></h1>
              </button>
              <select
                onChange={(e) => handleGenreSelect(e.target.value)}
                className="w-full mt-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              >
                <option value="">Select Genre</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Mystery">Mystery</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Drama">Drama</option>
                <option value="Suspense">Suspense</option>
                <option value="Romance">Romance</option>
                <option value="Comedy">Comedy</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Sports">Sports</option>
                {/* Add more options as needed */}
              </select>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
      <div className="mt-[25%] lg:mt-[10%] flex flex-wrap justify-center items-center">
        <AnimeCard anime={anime} />
      </div>
    </div>
  );
}

export default AnimeAll;
