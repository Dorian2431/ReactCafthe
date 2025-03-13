import React, { useContext, useState } from "react";
import "../styles/login.css";
import axios from "axios";
import { AuthContext } from "../contexte/AuthContext";
import { useNavigate } from "react-router-dom";
import Motdepasse from "./Motdepasse";

console.log("hello world");

function Login(props) {
  const { login } = useContext(AuthContext); // Fonction login venant du contexte
  const navigate = useNavigate(); // La navigation

  const [email, setemail] = useState("");
  const [motdepasse, setmotdepasse] = useState("");
  const [error, seterror] =
    useState(""); /*Permet de stocker les messages d'erreur*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/client/login`,
        {
          email: email,
          motDePasse: motdepasse,
        },
      );
      const { token, client } = response.data;

      //On met a jour le contexte d'authentification
      login(token, client);

      //Rediraction du client vers une page
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de la connexion : ", error);
      if (error.response.data.message) {
        seterror(error.response.data.message);
      } else {
        seterror("Email ou Mot de passe invalide");
      }
    }
  };

  return (
    <div className="pagedeco" style={{ margin: "250px auto", maxWidth: 400 }}>
      <div className="logo-container">
        <img src={"/logoco.png"} alt="Description de l'image" />
      </div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>
            {" "}
            <b> Email * </b>
          </label>
          <br />
          <input
            className="texte"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>
            {" "}
            <b>Mot de passe * </b>
          </label>
          <br />
          <input
            className="texte"
            type="password"
            value={motdepasse}
            onChange={(e) => setmotdepasse(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        {error && <div style={{ color: "red", marginBottom: 10 }}>{error}</div>}
        <button className="bouton" type="submit">
          <b> Se connecter </b>
        </button>
      </form>
      <a className="mdp" href="/Motdepasse">
        Mot de passe oublié
      </a>
      <a className="compte" href="/Newcompte">
        Crée un compte
      </a>
    </div>
  );
}

export default Login;
