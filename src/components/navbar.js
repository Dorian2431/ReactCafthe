import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexte/AuthContext";

function Navbar(props) {
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };
  console.log(user);

  return (
    <nav>
      <Link to="/">Mon Site</Link>

      <div>
        {isAuthenticated ? (
          <>
            <span>
              Bonjour {user.prenom} {user.Nom}
            </span>
            <button onClick={handleLogout}>Se déconnecter</button>
          </>
        ) : (
          <Link to="/login">Se connecter </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
