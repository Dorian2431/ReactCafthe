import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

function Card({ produit }) {
  /*Permet de recup le produit recup dans Produit List*/
  return (
    <div className="Card">
      <img
        src={produit.image}
        alt="Logo cafthé marron et vert"
        className="cardpack"
      />
      <div className="information">
        <h3>{produit.Nom}</h3>
        <p>{produit.Prix}</p>
        <Link to={`/produit/${produit.id_produit}`} className="details-btn">
          <b> Voir détails</b>
        </Link>
      </div>
    </div>
  );
}

export default Card;
