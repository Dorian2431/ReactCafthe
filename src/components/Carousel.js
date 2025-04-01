import React, { useState } from "react";
import "../styles/Carousel.css";
import { Link } from "react-router-dom"; // Importer Link si vous voulez l'utiliser dans le bouton

const Carousel = () => {
  const slides = [
    {
      image: "/pack1.png",
      title: "Pack de Café",
      button: "Voir détails",
      link: "/produit/3",
    },
    {
      image: "/machine1.png",
      title: "Machine à Café",
      button: "Voir détails",
      link: "/produit/7",
    },
    {
      image: "/pack2.png",
      title: "Pack de Thé",
      button: "Voir détails",
      link: "/produit/1",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
  };

  const { image, title, button, link } = slides[currentIndex]; // Extraire les données de la slide actuelle

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>
        &lt;
      </button>
      <div className="carousel-slide">
        <div className="carousel-content">
          <h3>{title}</h3>
          <img src={image} alt={`Slide ${currentIndex} Produit populaire`} />
          <Link to={link} className="carousel-button">
            {button}
          </Link>
        </div>
      </div>
      <button className="next" onClick={nextSlide}>
        >
      </button>
    </div>
  );
};

export default Carousel;
