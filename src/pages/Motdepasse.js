import React from "react";
import "../styles/Motdepasse.css";

function Motdepasse(props) {
  return (
    <div className="pagedeco2" style={{ margin: "300px auto", maxWidth: 400 }}>
      <div className="logo-container2">
        <img src={"/logoco.png"} alt="Description de l'image" />
      </div>
      <div className="mdp-titre">
        <h2>Première Connexion</h2>
      </div>
      <form>
        <div style={{ marginBottom: 10 }}>
          <br />
          <div>
            <label htmlFor="nom">Email : </label>
            <input
              type="text"
              id="ancien mdp"
              name="ancien mdp"
              placeholder="Ancien Mot de passe"
              required
            />
          </div>
          <div>
            <label htmlFor="nom">Ancien mot de passe : </label>
            <input
              type="text"
              id="ancien mdp"
              name="ancien mdp"
              placeholder="Ancien Mot de passe"
              required
            />
          </div>{" "}
          <div>
            <label htmlFor="nom">Nouveau mot de passe : </label>
            <input
              type="text"
              id="new mdp"
              name="new mdp"
              placeholder="Nouveau Mot de passe"
              required
            />
          </div>
        </div>
        <button className="bouton2" type="submit">
          <b> Se connecter </b>
        </button>
      </form>
      <a className="mdp2" href="/login">
        &lt;- Page de connexion
      </a>
    </div>
  );
}

export default Motdepasse;
