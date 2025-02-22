import React from "react";
import "../styles/header.css";

function Header(props) {
  return (
    <div className="head">
      <navbar />
      <div className="calque"></div>
      <img className="ima" src={"/head.jpg"} alt="Description de l'image" />
      <div className="logo">
        <img
          src="/logov1.png"
          alt="Description de l'image"
          className="image"
          height="364"
          width="792"
        />
      </div>
    </div>
  );
}

export default Header;
