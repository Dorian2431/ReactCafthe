import React, { useState, useContext } from "react";
import { useCart } from "../contexte/CartContext";
import { AuthContext } from "../contexte/AuthContext";
import "../styles/paiement.css";

function Paiement() {
  const { cartItems } = useCart();
  const { user } = useContext(AuthContext);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.Prix * item.quantity,
    0,
  );

  const handlePayment = (e) => {
    e.preventDefault();
    if (cardNumber && expiryDate && cvv) {
      setConfirmation("Carte valide ");
    }
  };

  return (
    <div>
      <div className="paiement-container">
        <div className="paiement-left">
          <h2>Destinataire</h2>
          <p>
            <strong>Nom :</strong> {user ? user.Nom : "Invité"}
          </p>
          <p>
            <strong>Prénom :</strong> {user ? user.prenom : "Invité"}
          </p>
          <p>
            <strong>Total à payer :</strong> {totalPrice.toFixed(2)} €
          </p>
        </div>
        <div className="paiement-right">
          <h2>Coordonnées de la Carte</h2>
          <form onSubmit={handlePayment}>
            <label>Numéro de carte</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9101 1121"
              maxLength="19"
              required
            />

            <label>Date d'expiration</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/AA"
              maxLength="5"
              required
            />

            <label>CVV</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              maxLength="3"
              required
            />
            <button type="submit">Valider</button>
          </form>
          {confirmation && <p className="confirmation-msg">{confirmation}</p>}
        </div>
      </div>
      <a href="/Panier">
        <button className="panier-add">&lt;- Retour</button>
      </a>
      <a href="/Recap">
        <button className="suivant">Suivant -&gt;</button>
      </a>
    </div>
  );
}

export default Paiement;
