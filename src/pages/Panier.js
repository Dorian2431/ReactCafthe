import React from "react";
import "../styles/panier.css";
import { useCart } from "../contexte/CartContext";

function Panier() {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.Prix * item.quantity,
    0,
  );

  return (
    <div>
      <div className="panier-t">
        <h2>Votre Panier</h2>
      </div>
      <div className="panier-l">
        <ul className="listeh-panier">
          <li>
            <strong>Nom</strong>
          </li>
          <li>
            <strong>Quantité</strong>
          </li>
          <li>
            <strong>Prix</strong>
          </li>
          <li>
            <strong>Action</strong>
          </li>
        </ul>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <ul key={item.id_produit} className="liste-panier">
              <li>{item.Nom}</li>
              <li>{item.quantity}</li>
              <li>{(item.Prix * item.quantity).toFixed(2)} €</li>
              <li>
                <button
                  className="panier-b"
                  onClick={() => removeFromCart(item.id_produit)}
                >
                  ❌
                </button>
              </li>
            </ul>
          ))
        ) : (
          <p>
            <b>Votre panier est vide.</b>
          </p>
        )}
      </div>
      <div className="total">
        <h3>Total : {totalPrice.toFixed(2)} €</h3>
      </div>
      <a href="/">
        <button className="panier-add">Ajouter un Article</button>
      </a>
      <a href="/Paiement">
        <button className="suivant">Suivant -></button>
      </a>
    </div>
  );
}

export default Panier;
