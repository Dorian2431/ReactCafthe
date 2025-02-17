import React, { createContext, useState, useEffect } from "react";

/*Exporatation du contexte pour y avoir accées*/
/*On va prendre tous ce qu'il y a dans App (toute l'appli),on sera connecter quand on sera connecter et inversement si déco*/
export const AuthContext = createContext(null);

/*Creation du provider pour la connexion et la déconnexion*/
/*Elle prend en entrée un enfant*/
export function AuthProvider({ children }) {
  const [user, setuser] =
    useState(
      null,
    ); /*Client, pour stocker des données utilisateur (nom,mail, etc...*/
  const [token, settoken] = useState(null); /*Token JWT*/

  //Stockage dans le LocalStorage (qui sera a stocker la donnée) pour la persistance des données
  // A chaque fois qu'on recup les données le "provideur" va se lancer grace au useeffect
  useEffect(() => {
    const storedtoken =
      localStorage.getItem(
        "token",
      ); /*On vérifie s'il y a un token et un utilisateur dans le localStorage et si oui, on fait les get*/
    const storeduser = localStorage.getItem("user");

    if (storeduser && storedtoken) {
      settoken(storedtoken);
      setuser(
        JSON.parse(storeduser),
      ); /*Le user recup va etre recup en objet JS*/
    }
  }, []);

  // Si le token ou le user change, on met a jour le localStorage
  useEffect(() => {
    /*Si quelqu'un est deja connecter sa peut etre chiant pour une autre personne qui essaye*/ /*Pour etre sur qu'a la déco nos donnée ne seront pas garder pour laprochaine personne qui va se co*/
    if (token && user) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      /*S'il y en avait on les removes (sup) pour etre sur au moment de sa deco*/
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  }, [
    token,
    user,
  ]); /*Si le token ou le user change, alors sa recharge le useeffect*/

  //Connexion (on recoit les données envoyées par l'api : token + infos client (user))
  const login = (jwt, userdata) => {
    /*jwt pour le token car on reprend le token et user*/
    settoken(jwt);
    setuser(userdata);
  };

  // Déconnexion
  const logout = () => {
    /*Va ecraser les données pour les remettres a 0*/
    settoken(null);
    setuser(null);
  };

  const value = {
    /*Pour que sa soit  accessible partout*/ token,
    user,
    login,
    logout,
    isAuthenticated: !!token, //true ou false
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
//Dans value on va mettre ce qui va etre accessible au enfant*
