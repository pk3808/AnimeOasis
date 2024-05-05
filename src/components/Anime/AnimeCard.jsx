import { useState } from "react";
import { FaYoutube } from "react-icons/fa6";
import YoutubeModal from "./YoutubeModal.jsx";
import Modal from "./Modal.jsx";

function AnimeCard({ anime }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showYouTubeModal, setShowYouTubeModal] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState(null);

  const openYouTubeModal = (url) => {
    setTrailerUrl(url);
    setShowYouTubeModal(true);
  };

  const closeYouTubeModal = () => {
    setTrailerUrl(null);
    setShowYouTubeModal(false);
  };

  return (
    <>
      {anime
        ? anime.map((animeItem, index) => {
            return (
              <div
                key={index}
                style={{
                  width: hoveredIndex === index ? "300px" : "130px",
                  height: hoveredIndex === index ? "280px" : "280px",
                  borderRadius: "8px",
                  marginBottom: "30px",
                  transition: "max-width 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "white-smoke",
                  marginRight: "15px",
                  marginLeft: "15px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  background: "linear-gradient(#f8f9f5, #faf0e6)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div>
                  <img
                    src={animeItem.images.webp.large_image_url}
                    alt={animeItem.title}
                    style={{
                      position: "relative",
                      width: "100%", // Make the image cover the entire width
                      height: "200px",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  />
                  {hoveredIndex === index && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${animeItem.images.jpg.large_image_url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "10px",
                        borderRadius: "8px",
                        transition: "opacity 0.3s ease",
                        opacity: hoveredIndex === index ? "1" : "0",
                        color: "#fff",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          transition: "opacity 0.3s ease",
                          opacity: hoveredIndex === index ? "1" : "0",
                        }}
                      ></div>

                      <div style={{ position: "absolute", top: 5, right: 5 }}>
                        <Modal animeItem={animeItem} />
                      </div>
                      <h1
                        style={{
                          fontSize: "16px",
                          marginBottom: 0,
                          color: "#fff",
                          font: "bold",
                          position: "absolute",
                          top: 35,
                          padding: "5px",
                          left: 5,
                          fontFamily: "sans-serif",
                        }}
                      >
                        {animeItem.title}
                      </h1>
                      <h1
                        style={{
                          fontSize: "14px",
                          marginBottom: 0,
                          color: "#fff",
                          font: "bold",
                          position: "absolute",
                          top: "35%",
                          padding: "5px",
                          left: 5,
                          marginRight: "50px",
                        }}
                      >
                        Rating : {animeItem.score}
                      </h1>
                      <h1
                        style={{
                          fontSize: "14px",
                          marginBottom: 0,
                          color: "#fff",
                          // backdropFilter: "blur(10px)",
                          font: "bold",
                          position: "absolute",
                          top: "45%",
                          padding: "5px",
                          left: 5,
                          marginRight: "50px",
                        }}
                      >
                        Ranking : {animeItem.rank}
                      </h1>
                      <h1
                        style={{
                          fontSize: "12px",
                          marginBottom: 0,
                          color: "#fff",
                          backdropFilter: "blur(10px)",
                          font: "bold",
                          position: "absolute",
                          top: "60%",
                          padding: "2px",
                          left: 10,
                          border: "1px solid white",
                          right: 10,
                        }}
                      >
                        {animeItem.rating}
                      </h1>
                      <div
                        style={{
                          position: "absolute",
                          bottom: 5,
                          left: 5,
                          color: "white",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <h1 style={{marginLeft: "5px"}}>Watch Trailer</h1>
                        <button
                          style={{
                            cursor: "pointer",
                            backgroundColor: "transparent",
                            marginRight: "10px",
                          }}
                          onClick={() =>
                            openYouTubeModal(animeItem.trailer.embed_url)
                          }
                        >
                          <FaYoutube size={30} color="red" />
                        </button>
                      </div>
                    </div>
                  )}
                  <h1
                    style={{
                      fontSize: "15px",
                      marginBottom: "8px",
                      color: "black",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      padding: "10px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {animeItem.title}
                  </h1>
                </div>
              </div>
            );
          })
        : "not found"}
      {showYouTubeModal && (
        <YoutubeModal url={trailerUrl} onClose={closeYouTubeModal} />
      )}
    </>
  );
}

export default AnimeCard;
