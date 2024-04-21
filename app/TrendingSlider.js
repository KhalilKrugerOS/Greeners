"use client";
import React, { useState, useEffect } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import './TrendingSlider.css'; // Assurez-vous que ce fichier CSS est dans le même dossier

const TrendingSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Sophie Turner",
      story: "Sophie a transformé sa passion pour la photographie ",
      ligne2:"en une entreprise florissante, capturant des moments .",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Liam Payne",
      story: "Sophie a transformé sa passion pour la photographie ",
      ligne2:"en une entreprise florissante, capturant des moments .",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/12753820/pexels-photo-12753820.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Emma Watson",
      story: "Sophie a transformé sa passion pour la photographie ",
      ligne2:"en une entreprise florissante, capturant des moments .",    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change la carte toutes les 3 secondes
    return () => clearInterval(interval);
  }, [currentIndex, items.length]);

  return (
    <div className="trending-slider">
      <h2 className="trending-slider-title">Our Success Stories</h2>
      <div className="trending-slider-wrapper">
        <AiOutlineArrowLeft className="slide-arrow left" onClick={() => setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : items.length - 1)} />
        <div className="trending-slider-content">
          {items.map((item, index) => (
            <div key={item.id} className={`trending-slider-card ${index === currentIndex ? 'active' : ''}`} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              <div className="card-image-container">
                <img src={item.img} alt={item.name} className="card-image" />
              </div>
              <div className="card-info">
                <h3 className="card-name">{item.name}</h3>
                <p className="card-story">{item.story}</p>
                <p className="card-story">{item.ligne2}</p>

              </div>
            </div>
          ))}
        </div>
        <AiOutlineArrowRight className="slide-arrow right" onClick={() => setCurrentIndex(currentIndex < items.length - 1 ? currentIndex + 1 : 0)} />
      </div>
    </div>
  );
};

export default TrendingSlider;
