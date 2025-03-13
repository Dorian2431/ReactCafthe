import React from "react";
import "../styles/panier.css";

function Panier(props) {
  return (
    <div>
      <div className="panier-t">
        <h2>Votre Panier</h2>
      </div>
      <div className="panier-l">
        <ul className="liste-panier">
          <li>Nom</li>
          <li>Quantité</li>
          <li>Prix</li>
        </ul>
      </div>
      <a href="/">
        <button className="panier-add">Ajouter un Article</button>
      </a>
      <a href="/Paiement">
        <button className="suivant">Suivant -></button>
      </a>
    </div>
  );
}

export default Panier;
