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
        <div className="blocs">
          <div className="color">
            <FontAwesomeIcon icon={faPhoneVolume} />
          </div>{" "}
          06 07 08 09 010
        </div>
        <div className="blocs">
          <Link className="lienn" to="/">
            Accueil
          </Link>
          <Link to="/">Producteurs</Link>
        </div>
        <div className="blocs">
          <div>
            <div className="connexion">
              <div className="color">
                <FontAwesomeIcon icon={faUser} />
              </div>
              {isAuthenticated ? (
                <>
                  <span>
                    Compte : {user.prenom} {user.Nom}
                  </span>
                  <button onClick={handleLogout}>Se déconnecter</button>
                </>
              ) : (
                <Link to="/login">Se connecter </Link>
              )}
            </div>
          </div>
          <div className="color">
            <FontAwesomeIcon icon={faBasketShopping} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
