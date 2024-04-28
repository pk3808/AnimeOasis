import React, { useRef, useEffect } from "react";

const YoutubeModal = ({ url, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div style={modalStyle}>
      <div ref={modalRef} style={modalContentStyle}>
        <button style={closeButtonStyle} onClick={onClose}>Close</button>
        <iframe
          title="YouTube Video"
          width="560"
          height="315"
          src={url}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const modalStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalContentStyle = {
  backgroundColor: "white",
  // padding: "20px",

  maxWidth: "90%",
  maxHeight: "90%",
  overflow: "auto",
};

const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  cursor: "pointer",
  zIndex: "1",
};

export default YoutubeModal;
