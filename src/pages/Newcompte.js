import React from "react";
import "../styles/Newcompte.css";

function Newcompte(props) {
  return (
    <div className="pagedeco" style={{ margin: "300px auto", maxWidth: 400 }}>
      <div className="logo-container">
        <img src={"/logoco.png"} alt="Description de l'image" />
      </div>
      <h2>Crée un Compte</h2>
      <form>
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
            required
          />
        </div>
        <div>
          <label htmlFor="nom">Nom : </label>
          <input type="text" id="nom" name="nom" placeholder="Nom" required />
        </div>
        <div>
          <label htmlFor="nom">Email : </label>
          <input
            type="mail"
            id="mail"
            name="mail"
            placeholder="Adresse E-mail"
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
