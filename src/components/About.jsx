import React from "react";
import logo from "../assets/logo.png";
import bg from "../assets/bg.png";
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#fff",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <Link to="/">
      <img
        src={logo}
        alt="Anime Oasis Logo"
        style={{ width: "150px", }}
      />
      </Link>
      <h1
        style={{ fontSize: "3rem", marginBottom: "20px", color: " #E01E66 " }}
      >
        Welcome to Anime Oasis
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          lineHeight: "1.5",
          marginBottom: "30px",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Anime Oasis is your ultimate destination for exploring the world of
        anime, manga, and novels. We aim to provide you with comprehensive
        information about your favorite series, characters, and authors.
      </p>
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          lineHeight: "1.5",
          marginBottom: "30px",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Whether you're a seasoned otaku or just starting your journey into the
        anime universe, Anime Oasis has something for everyone. From classic
        masterpieces to the latest releases, dive into a treasure trove of
        entertainment with us.
      </p>
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          lineHeight: "1.5",
          marginBottom: "30px",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Explore our vast collection of anime, manga, and novels, discover new
        favorites, and immerse yourself in the enchanting world of Japanese
        culture and storytelling.
      </p>
      <p
        style={{
          fontSize: "1.rem",
          maxWidth: "600px",
          lineHeight: "1.5",
          marginBottom: "30px",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Thank you for choosing Anime Oasis as your guide to the fascinating
        realm of anime and manga. Let the adventure begin!
      </p>
    </div>
  );
};

export default About;
