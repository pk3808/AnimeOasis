import React, { useState } from 'react';
import Modal from './Modal';

function NovelCard({ novel }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const cardStyle = {
    width: '300px',
    height: '200px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    background: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), ${getRandomColor()}`,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <>
      <div className="m-4" style={cardStyle} onClick={openModal}>
        <h3>Name: {novel.name}</h3>
        <p>Status: {novel.status}</p>
        <p>Slug: {novel.slug}</p>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} description={novel.description} />
    </>
  );
}

export default NovelCard;
