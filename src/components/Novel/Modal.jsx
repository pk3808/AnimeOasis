import React, { useEffect } from 'react';

function Modal({ isOpen, onClose, description }) {

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && event.target.closest(".modal-content") === null) {
        onClose();
      }
    };

    const handleTouchStart = (event) => {
      if (isOpen && event.target.closest(".modal-content") === null) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleTouchStart);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, [isOpen, onClose]);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const modalStyle = {
    width: '70%',
    maxWidth: '600px',
    background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), ${getRandomColor()}`,
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    borderRadius: '10px',
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 modal-content" style={modalStyle}>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Novel Description</h2>
              {/* <button onClick={onClose}>Close</button> */}
            </div>
            <p>{description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
