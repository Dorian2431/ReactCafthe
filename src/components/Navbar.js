import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexte/AuthContext";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faPhoneVolume,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };
  console.log(user);

  return (
    <nav>
      <div className="bloc">
        {/* Bloc du téléphone */}
        <div className="blocs">
          <div className="connexion">
            <div className="nav-compte">
              <a href="/Compte">
                <FontAwesomeIcon icon={faUser} />
                <p className="nav-compte ecrit">Compte</p>
              </a>
            </div>
            {isAuthenticated ? (
              <>
                <button onClick={handleLogout}>Déconnection</button>
              </>
            ) : (
              <Link to="/login">Se connecter</Link>
            )}
          </div>
        </div>
        <div className="trait"></div>

        {/* Bloc des liens */}
        <div className="blocs">
          <Link className="lienn" to="/">
            Accueil
          </Link>
          <Link to="/Producteur">Producteurs</Link>
        </div>
        <div className="trait"></div>

        {/* Connexion */}
        <div className="blocs">
          <div className="connexion">
            <div className="color">
              <FontAwesomeIcon icon={faPhoneVolume} />
              <p className="ecrit">06 07 08 09 010</p>
            </div>
          </div>

          {/* Panier */}
          <div className="panier">
            <div className="color">
              <FontAwesomeIcon icon={faBasketShopping} />
            </div>
            <p className="ecrit">Panier </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
