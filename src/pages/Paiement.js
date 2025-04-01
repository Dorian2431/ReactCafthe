import React from "react";

function Paiement(props) {
  return (
    <div>
      <div className="panier-t">
        <h2>Procédure de Paiement</h2>
      </div>
      <a href="/panier">
        <button className="panier-add">&lt;- Retour</button>
      </a>
      <a href="/Recap">
        <button className="suivant">Suivant -></button>
      </a>
    </div>
  );
}

export default Paiement;
