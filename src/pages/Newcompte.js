import React, { useState } from "react";
import "../styles/Newcompte.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Newcompte(props) {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [mail, setMail] = useState("");
  const [mdp, setMdp] = useState("");
  const [adresse, setAdresse] = useState("");

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); //Supprime la fonction de base (bouton) empeche d'envoyer
    setError(""); //Efface le message d'erreur
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/client/register`,
        { prenom: prenom, nom: nom, email: mail, MDP: mdp, adresse: adresse },
      );
      navigate("/login");
    } catch (error) {
      console.error("erreur de connexion", error);
    }
  };
  return (
    <div className="pagedeco" style={{ margin: "300px auto", maxWidth: 400 }}>
      <div className="logo-container">
        <img src={"/logoco.png"} alt="Description de l'image" />
      </div>
      <h2>Crée un Compte</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <br />
        </div>
        <div>
          <label htmlFor="nom">Prénom : </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            placeholder="Prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="nom">Nom : </label>
          <input
            type="text"
            id="nom"
            name="nom"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="nom">Email : </label>
          <input
            type="mail"
            id="mail"
            name="mail"
            placeholder="Adresse E-mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="nom">Mot de passe : </label>
          <input
            type="text"
            id="mdp"
            name="mdp"
            placeholder="Mot de passe"
            value={mdp}
            onChange={(e) => setMdp(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="nom">Adresse : </label>
          <input
            type="text"
            id="adresse"
            name="adresse"
            placeholder="Adresse"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
            required
          />
        </div>
        <button className="bouton" type="submit">
          <b> Crée un Compte </b>
        </button>
      </form>
      <a className="mdp" href="/login">
        &lt;- Page de connexion
      </a>
    </div>
  );
}

export default Newcompte;
