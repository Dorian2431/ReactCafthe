import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../contexte/CartContext";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/produit/${id}`,
        );
        setDetail(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération du produit", error);
      }
    };
    fetchDetail();
  }, [id]);

  if (!detail) return <p>Chargement...</p>;

  return (
    <div>
      <div className="product-container">
        <div className="gauche">
          <div className="d-img">
            <img
              src={`/${detail.image}`}
              alt={detail.Nom}
              className="cardpack img_details"
            />
          </div>
          <p className="stock">En stock : {detail.Stock}</p>
          <div className="quantite">
            <label>Quantité :</label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            >
              {[...Array(detail.Stock).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>
          <button
            className="add-panier"
            onClick={() => addToCart({ ...detail, quantity })}
          >
            Ajouter au Panier
          </button>
        </div>
        <div className="droite">
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
      <a href="/" className="retour-accueil">
        <button className="panier-add">&lt; Page d'accueil</button>
      </a>
    </div>
  );
}

export default ProductDetails;
