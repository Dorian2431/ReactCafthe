import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

function Card({ produit }) {
  /*Permet de recup le produit recup dans Produit List*/
  return (
    <div className="Card">
      {/*Image*/}
      <h3>{produit.Nom}</h3>
      <p>{produit.Prix}</p>
      <Link to={`/produit/${produit.id_produit}`} className="details-btn">
        Voir détails
      </Link>
    </div>
  );
}

export default Card;
