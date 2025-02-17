import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import Card from "../components/Card";
import filter from "../components/filter";
import "react-loading-skeleton/dist/skeleton.css";

function ProductList(props) {
  const [produits, setProduits] = useState([]);
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/produit");
        setProduits(response.data);
      } catch (error) {
        console.error("Erreur du chargement des produits", error);
      } finally {
        setisloading(false); /*On arrete d'afficher le chargement (squelette)*/
      }
    };

    void fetchProduits();
  }, []);

  if (isloading) {
    return (
      <div className="product-list">
        {Array.from({ length: produits.length }).map((_, i) => (
          <div key={i} className="product-skeleton">
            {/*Imagee*/}
            <Skeleton height={200} width={300} />

            <div style={{ marginTop: "5px" }}>
              <Skeleton height={20} width="70%" />
            </div>

            <div style={{ marginTop: "10px" }}>
              <Skeleton height={20} width="40%" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <h3>Liste des produits</h3>
      <div className="product-list">
        {produits.map((produit) => (
          <Card
            key={produit.id_produit}
            produit={produit}
          /> /*Recupere l'id du produit et le produit*/
        ))}
      </div>
    </div>
  );
}

/* const filtreproduit = async () => {
  fetch(`http://localhost:3001/categorie/${id_categorie}`).then((response) =>
    response(),
  );
}; */

export default ProductList;
