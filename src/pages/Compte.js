import React, { useEffect, useState, useContext } from "react";
import "../styles/Compte.css";
import { AuthContext } from "../contexte/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import Motdepasse from "./Motdepasse";

function Compte(props) {
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };
  console.log(user);
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/Compte`,
        );
        console.log(response.data);
        if (response.data.length > 0) {
          setClient(response.data[0]);
        }
      } catch (error) {
        console.error("Erreur du chargement des produits", error);
      } finally {
        setLoading(false);
      }
    };

    void fetchClient();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  const { Nom, prenom, MDP, Email, Adresse } = client;

  return (
    <div>
      <h1 className={"c-titre"}>Compte</h1>
      <div className="c-bloc">
        {/*Gauche*/}
        <div className="c-gauche">
          <h3 className="c-titre2">Information Personnel</h3>
          <div className="c-bordure">
            <div className="c-partie">
              <p className="c-nom">
                <b>
                  {Nom} {prenom}
                </b>
              </p>
              <p>
                <b> Mot de passe :</b> <input type="password" value={MDP} />
              </p>
            </div>
            <a className="mdp" href="/Motdepasse">
              Modifier le Mot de passe
            </a>
            <div className="c-partie">
              <b>
                <p>Adresse e-mail : {Email}</p>
              </b>
              <b>
                <p>Adresse : {Adresse}</p>
              </b>
            </div>
          </div>
        </div>
        <div className="c-droite">
          <ul className="compte-l">
            <li>#Id</li>
            <li>Total</li>
            <li>Date</li>
            <li>Statue</li>
          </ul>
        </div>
      </div>
      <a href="/">
        <button className="compte-b">&lt; Page d'accueil</button>
      </a>
      {isAuthenticated ? (
        <>
          <button className="compte-d" onClick={handleLogout}>
            Déconnection
          </button>
        </>
      ) : (
        <Link className="compte-dc" to="/login">
          Se connecter
        </Link>
      )}
    </div>
  );
}

export default Compte;
