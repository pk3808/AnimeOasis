import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.png";
import luffy from "../assets/luffy.png";
import naruto from "../assets/naruto.png";
import bleach from "../assets/bleach.png";
import logo from "../assets/logo.png";
// import Modal from './Modals/Modal.jsx';

const images = [luffy, naruto];
const intervalTime = 4000;

const styles = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  position: "relative",
  display: "flex",
};

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
    <div style={styles}>
      <div className="absolute top-0 w-full flex justify-left items-start pl-4 mt-4">
        <div className="flex w-[6%] h-[6%]">
          <img className="" src={logo} alt="Logo" />
        </div>
        <div className="flex ml-[44%] mt-4 text-#082567">
          <button
            onClick={() => navigate("AnimeAll")}
            className="ml-4  text-2xl font-bold hover:text-pink-700 transition duration-300 ease-in-out transform hover:-translate-y-1 
        hover:scale-110"
          >
            {" "}
            Anime
          </button>
          <button
            onClick={() => navigate("MangaAll")}
            className="ml-20 text-#002244 text-2xl font-bold hover:text-pink-700 transition duration-300 ease-in-out transform hover:-translate-y-1 
        hover:scale-110"
          >
            Manga
          </button>
          <button
            onClick={() => navigate("NovelAll")}
            className="ml-20 text-#002244 text-2xl font-bold hover:text-pink-700 transition duration-300 ease-in-out transform hover:-translate-y-1 
        hover:scale-110"
          >
            {" "}
            Novel
          </button>
          <button
           onClick={() => navigate("About")}
            className="ml-20 text-#002244  text-2xl font-bold hover:text-pink-700 transition duration-300 ease-in-out transform hover:-translate-y-1 
        hover:scale-110"
          >
            {" "}
            About
          </button>
        </div>
      </div>
      <div
        className="w-1/2 h-[85vh] mt-[6.8%] flex justify-center items-center"
        style={{
          position: "relative",
          flex: 1,
          maxHeight: "85vh",
          overflow: "hidden",
          marginBottom: 0,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Current Image"
            style={{
              ...imageStyles,
              opacity: index === currentImageIndex ? opacity : 0,
              maxHeight: "85vh",
              width: "auto",
              height: "auto",
              maxWidth: "100%",
            }}
          />
        ))}
        <div className="absolute bottom-0 w-full flex justify-center items-center mb-10">
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

      <div
        className="w-1/2 h-[85vh] flex flex-col justify-center items-left mt-[5%]"
        style={{ flex: 1 }}
      >
        <p className="text-black text-2xl font-bold mx-4 mb-6 text-left w-3/4">
          Welcome to Our Anime Oasis, Where Dreams Take Flight, Legends are
          Born, and Every Episode Unveils a New Chapter of Intrigue and Wonder.
        </p>
        <button
          onClick={() => navigate("Explore")}
          className="bg-pink-700 hover:bg-pink-500 w-[20%] text-white font-bold py-2 px-4 rounded ml-4"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default Home;
