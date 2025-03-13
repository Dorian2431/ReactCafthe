import React from "react";
import "../styles/header.css";
import Navbar from "./Navbar.js";

function Header(props) {
  return (
    <div className="head">
      <Navbar />
      <div className="h-logo">
        <img
          src="/logov1.png"
          alt="Logo cafthé marron et vert"
          className="image"
          className="h-logo"
        />
      </div>
      <div className="calque"></div>
      <img
        className="ima"
        src={"/header.jpg"}
        alt="Image de Café et de avec des feuilles de thé"
      />
      <p className="h-texte">
        <b>
          Bienvenue sur Cafthe, votre destination incontournable pour une
          expérience unique autour du thé et du café. Que vous soyez un
          passionné de thé, un amateur de café ou à la recherche du parfait
          accessoire, Cafthe vous accompagne dans chaque moment de dégustation
          avec style et authenticité.
        </b>
      </p>
    </div>
  );
}

export default Header;
