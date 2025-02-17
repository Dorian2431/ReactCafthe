import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetails(props) {
  const { id } =
    useParams(); /*Permet de recup toute les variables passé dans l'url*/
  const [detail, setdetail] = useState([]);

  useEffect(() => {
    const fetchdetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/produit/${id}`,
        );
        setdetail(response.data); /*Permet d'avoir accée au donné*/
      } catch (error) {
        console.error("Erreur d'ajout au Panier", error);
      }
    };

    void fetchdetail();
  }, [id]); /*A chaque fois que l'ia va changer, sa va recharger*/

  /*if (!produit) {
    return <p>Produit introuvable</p>;
  }*/

  return (
    <div className="details">
      {/*Image*/}
      <h2>{detail.Nom}</h2>
      <p>{detail.Description}</p>
      <p>
        <strong>Prix TTC :</strong> {detail.Prix}
      </p>
      <p>
        <strong>Stock :</strong> {detail.Stock}
      </p>
    </div>
  );
}
export default ProductDetails;
