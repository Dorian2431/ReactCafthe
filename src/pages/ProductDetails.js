import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/ProductDetails.css";

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

  return (
    <div className="product-container">
      {/* Partie gauche avec image et stock */}
      <div className="gauche">
        <div className="d-img">
          <img src="/pack1.png" alt="Pack de café" className="cardpack2" />
        </div>
        <p className="stock">En stock : {detail.Stock}</p>
        <div className="quantite">
          <label>Quantité :</label>
          <select>
            {[...Array(detail.Stock).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>
        <button className="add-panier">Ajouter au Panier</button>
      </div>
      <div className="droite">
        {/* Partie droite */}
        <h2 className="titre-d">{detail.Nom}</h2>
        <hr />
        <p className="description-d">{detail.Description}</p>
        <hr />
        <div className="d-info">
          <p>
            <strong>Poids :</strong> {detail.Poids}
          </p>
          <p>
            <strong>Prix TTC :</strong> {detail.Prix} €
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
