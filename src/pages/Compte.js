import React, { useEffect, useState } from "react";
import "../styles/Compte.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function Compte(props) {
  return (
    <div>
      <h1 className={"c-titre"}>Information Personnel</h1>
      {/*Gauche*/}
      <div className="droite">
        <h3>Information</h3>
        <div className="c-bordure"></div>
        <p className="c-nom">
          {/*  {client.Nom}
          {client.prenom} */}
        </p>
        <p>Mot de passe : {/* client.MDP */}</p>
      </div>
    </div>
  );
}

export default Compte;
