import React from "react";

function Recap(props) {
  return (
    <div>
      <div className="panier-t">
        <h2>Récapitulatif</h2>
      </div>
      <a href="/Recap">
        <button className="suivant">Payer -></button>
      </a>
    </div>
  );
}

export default Recap;
