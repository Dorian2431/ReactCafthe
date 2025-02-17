import React from "react";
import { Link } from "react-router-dom";

function filtre({ produit }) {
  return (
    <div className="filtreproduit">
      <label>Filtre :</label>
      <select id="filtre">
        <option>Thé</option>
        <option>Café</option>
        <option>Accessoires</option>
      </select>
    </div>
  );
}
