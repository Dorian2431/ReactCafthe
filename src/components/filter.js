import React, { useEffect, useState } from "react";
import axios from "axios";

function Filtre(props) {
  const [categorie, setCategorie] = useState([]);

  useEffect(() => {
    const fetchFiltre = async () => {
      try {
        console.log("appel back");
        const response = await axios.get("http://localhost:3001/api/categorie");
        console.log(response.data);
        setCategorie(response.data);
      } catch (error) {
        console.error("Erreur du chargement des categories", error);
      } finally {
        console.log(categorie);
        // setisloading(false); /*On arrete d'afficher le chargement (squelette)*/
      }
    };
    void fetchFiltre();
  }, []);

  return (
    <div>
      {categorie.map((cat, i) => (
        <div key={i}>{cat.Nom}</div>
      ))}
    </div>
  );
}
export default Filtre;
