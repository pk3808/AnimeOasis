import React, { useEffect, useState } from "react";
import bg from "../../assets/whitebg.jpg";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import NovelCard from "./NovelCard";
import { CiSearch } from "react-icons/ci";
import { novelData } from "../../services/api";

const styles = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  position: "relative",
  display: "flex",
};

function NovelAll() {
  const [novels, setNovels] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchNovels = async () => {
      try {
        const response = await novelData();
        console.log(response); // Make sure to see the structure of the response
        setNovels(response.items);
      } catch (error) {
        console.error("Error fetching novels:", error);
      }
    };

    fetchNovels();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await novelData(searchQuery);
      setNovels(response.items);
    } catch (error) {
      console.error("Error fetching novels:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={styles}>
      <div className="absolute top-0 w-full flex justify-between items-center px-4 py-2">
        <button className="w-[14%] h-[14%] lg:w-[6%] lg:h-[6%]">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </button>
        <div className="flex lg:mr-[5%]"> 
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search novels"
            className="px-4 py-2 ml-[5%] w-[50%] lg:w-[65%] bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white height-50"
          />
          <button
            onClick={handleSearch}
            className="ml-[0.5%] px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white cursor-pointer"
          >
            <CiSearch />
          </button>
        </div>
      </div>
      <div className="mt-[22%] lg:mt-[10%] lg:flex lg:flex-wrap lg:justify-center ml-[3%] ">
        {novels.map(novel => (
          <NovelCard key={novel.novelId} novel={novel} />
        ))}
      </div>
    </div>
  );
}

export default NovelAll;
