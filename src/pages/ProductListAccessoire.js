import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import Card from "../components/Card";
import ProductDetails from "./ProductDetails";
import "react-loading-skeleton/dist/skeleton.css";
import "../styles/ProductList.css";
import {
  faPhoneVolume,
  faMugHot,
  faLeaf,
  faKitchenSet,
  faThLarge,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductListAccessoire(props) {
  const [produits, setProduits] = useState([]);
  const [isloading, setisloading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState(0); // État pour la catégorie sélectionnée
  const [filteredElements, setFilteredElements] = useState(produits); // État pour la liste filtrée

  // Fonction de callback passée au composant Filtre pour recevoir la key sélectionnée
  const handleSelectCategory = (key) => {
    setSelectedCategory(key);
  };

  // Utiliser useEffect pour filtrer les produits lorsque la catégorie change
  useEffect(() => {
    if (selectedCategory === 0) {
      setFilteredElements(produits); // Affiche tous les produits
    } else {
      console.log(produits);
      console.log(selectedCategory);
      const filtered = produits.filter(
        (produit) => produit.type_produit_id === parseInt(selectedCategory),
      );
      console.log(filtered);
      setFilteredElements(filtered); // Met à jour la liste filtrée
    }
  }, [selectedCategory, produits]); // Déclenche lorsque selectedCategory ou produits changent

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/categorie/accessoires`,
        );
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
      <h4 className="titres">Liste des produits</h4>
      <p>
        <b>Filtre des produits :</b>
      </p>
      <div className="filtre">
        <div>
          <a href="/">
            <div className="f-tout">
              <FontAwesomeIcon icon={faThLarge} />
            </div>
          </a>
        </div>
        <div>
          <a href="/cafe">
            <div className="f-cafe">
              <FontAwesomeIcon icon={faMugHot} />
            </div>
          </a>
        </div>
        <div>
          <a href="/the">
            <div className="f-the">
              <FontAwesomeIcon icon={faLeaf} />
            </div>
          </a>
        </div>
        <div>
          <a href="/accessoire" className="f-choisit">
            <div className="f-acc">
              <FontAwesomeIcon icon={faKitchenSet} />
            </div>
          </a>
        </div>
      </div>
      <div className="product-list">
        {filteredElements.map((produit) => (
          <Card
            key={produit.id_produit}
            produit={produit}
          /> /*Recupere l'id du produit et le produit*/
        ))}
      </div>
    </div>
  );
}

export default ProductListAccessoire;
