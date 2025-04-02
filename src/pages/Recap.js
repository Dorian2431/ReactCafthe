import React, { useContext, useState } from "react";
import { useCart } from "../contexte/CartContext";
import { AuthContext } from "../contexte/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/recap.css";

function Recap() {
  const { cartItems } = useCart();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate(); // Permet la redirection
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const totalHT = cartItems.reduce(
    (total, item) => total + item.Prix * item.quantity,
    0,
  );
  const tva = totalHT * 0.2;
  const totalTTC = totalHT + tva;

  const handlePayment = () => {
    setPaymentSuccess(true); // Affiche le message de validation
    setTimeout(() => {
      navigate("/"); // Redirige vers la page d'accueil après 2s
    }, 2000);
  };

  return (
    <div className="recap-container">
      <div className="recap-h2">
        <h2>Récapitulatif de votre commande</h2>
      </div>

      <div className="recap-section">
        <div className="recap-h3">
          <h3>Informations client</h3>
        </div>
        <p>
          <strong>Nom :</strong> {user ? user.nom : "Invité"}
        </p>
        <p>
          <strong>Prénom :</strong> {user ? user.prenom : "Invité"}
        </p>
        <p>
          <strong>Adresse :</strong> {user ? user.adresse : "Non renseignée"}
        </p>
      </div>

      <div className="recap-section">
        <div className="recap-h3">
          <h3>Produits commandés</h3>
        </div>
        <ul className="recap-ul">
          {cartItems.map((item) => (
            <li key={item.id_produit}>
              {item.quantity}x {item.Nom} -{" "}
              {(item.Prix * item.quantity).toFixed(2)} €
            </li>
          ))}
        </ul>
      </div>

      <div className="recap-section">
        <div className="recap-h3">
          <h3>Total</h3>
        </div>
        <p>
          <strong>Total HT :</strong> {totalHT.toFixed(2)} €
        </p>
        <p>
          <strong>TVA (20%) :</strong> {tva.toFixed(2)} €
        </p>
        <p>
          <strong>Total TTC :</strong> {totalTTC.toFixed(2)} €
        </p>
      </div>

      <div className="recap-buttons">
        <a href="/paiement">
          <button className="btn-retour">← Retour</button>
        </a>
        <button
          className="btn-payer"
          onClick={handlePayment}
          disabled={paymentSuccess}
        >
          {paymentSuccess ? "Paiement validé ✔️" : "Payer →"}
        </button>
      </div>
    </div>
  );
}

export default Recap;
