import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img className="img" src={"/footer.png"} alt="Description de l'image" />
      <div className="footer2">
        <div>
          {/* Logo */}
          <div>
            <a href="#">Mention Légale</a>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>

        <div>
          {/* Symbole */}
          <p>Adresse</p>
          <p>18 rue de la motte de beurre</p>

          {/* Symbole */}
          <p>Téléphone</p>
          <p>06 07 08 09 010</p>

          {/* Symbole */}
          <p>Adresse-Mail</p>
          <p>Caf.the@gmail.com</p>
        </div>

        {/* Réseaux sociaux */}
        <div className="rs1">
          <p>Suivez-nous sur nos réseaux sociaux :</p>
          <div className="rs">
            <a href="#" className="text-green-400 text-xl hover:text-green-300">
              <FaFacebookF />
            </a>
            <a href="#" className="text-green-400 text-xl hover:text-green-300">
              <FaInstagram />
            </a>
            <a href="#" className="text-green-400 text-xl hover:text-green-300">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
