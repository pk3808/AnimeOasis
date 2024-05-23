import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.png";
import luffy from "../assets/luffy.png";
import naruto from "../assets/naruto.png";
import logo from "../assets/logo.png";
import NavDrawer from '../components/Drawer/drawer.jsx'; // Import the NavDrawer component

const images = [luffy, naruto];
const intervalTime = 4000;


const imageStyles = {
  position: "absolute",
  transition: "opacity 1s ease",
  width: "90%",
  left: "5%",
  top: "50%",
  transform: "translateY(-50%)",
};

function Home() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacity(0); // Start fading out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setOpacity(1); // Start fading in
      }, 1000); // Wait for the fade out animation to complete (1s)
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, []);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
    setOpacity(1);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute top-0 w-full flex justify-between items-start p-4">
        <div className="flex w-[14%] h-[14%] lg:w-[6%] lg:h-[6%]" >
          <img className="w-full h-full object-contain" src={logo} alt="Logo" />
        </div>
        {/* Mobile Drawer Navigation */}
        <div className="block lg:hidden">
          <NavDrawer />
        </div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 lg:space-x-20 mt-4 text-#082567 text-xl lg:text-2xl font-bold">
          <button
            onClick={() => navigate("AnimeAll")}
            className="hover:text-pink-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-14"
          >
            Anime
          </button>
          <button
            onClick={() => navigate("MangaAll")}
            className="hover:text-pink-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-14"
          >
            Manga
          </button>
          <button
            onClick={() => navigate("NovelAll")}
            className="hover:text-pink-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-14"
          >
            Novel
          </button>
          <button
            onClick={() => navigate("About")}
            className="hover:text-pink-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-14"
          >
            About
          </button>
          <button
            onClick={() => navigate("PrivacyPolicy")}
            className="hover:text-pink-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-24"
          >
            Privacy
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center relative overflow-hidden mt-[30%] lg:mt-10">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Current Image"
            style={{
              ...imageStyles,
              opacity: index === currentImageIndex ? opacity : 0,
            }}
          />
        ))}
        <div className="absolute bottom-0 w-full flex justify-center items-center mb-4 lg:mb-10">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full mx-1 cursor-pointer ${
                currentImageIndex === index ? "bg-gray-900" : "bg-pink-700"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-start p-4 lg:p-10 ">
        <p className="text-black text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center lg:text-left">
          Welcome to Our Anime Oasis, Where Dreams Take Flight, Legends are
          Born, and Every Episode Unveils a New Chapter of Intrigue and Wonder.
        </p>
        <button
          onClick={() => navigate("Explore")}
          className="bg-pink-700 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded w-1/2 ml-[25%] lg:w-1/4 lg:ml-0 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 mt-[5%] lg:mt-0" 
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default Home;
