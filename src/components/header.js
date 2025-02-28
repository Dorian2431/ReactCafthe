import React from "react";
import "../styles/header.css";
import Navbar from "./Navbar.js";

function Header(props) {
  return (
    <div className="head">
      <Navbar />
      <div className="logo">
        <img
          src="/logov1.png"
          alt="Logo cafthé marron et vert"
          className="image"
          height="364"
          width="792"
          className="logo"
        />
      </div>
      <div className="calque"></div>
      <img
        className="ima"
        src={"/header.jpg"}
        alt="Image de Café et de avec des feuilles de thé"
      />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
}

export default Header;
