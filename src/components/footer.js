import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img className="img" src={"/footer.png"} alt="Description de l'image" />
      <div className="footer2">
        <div>
          <img
            className="logo"
            src={"/logoco.png"}
            alt="Description de l'image"
          />
          <div>
            <a className="lien" href="#">
              <b>Mention Légale</b>
            </a>
            <br></br>
            <a className="lien" href="#">
              <b>Politique de confidentialité</b>
            </a>
          </div>
        </div>

        <div>
          <h2 className="contact">Contact</h2>
          <div>
            {/* Symbole */}
            <p className="titre">
              <b>Adresse</b>
            </p>{" "}
            <p className="nom">
              <b>18 rue de la motte de beurre</b>
            </p>
          </div>
          <div>
            {/* Symbole */}
            <p className="titre">
              <b>Téléphone</b>
            </p>
            <p>
              <b>06 07 08 09 010</b>
            </p>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="rs1">
          <h2 className="r">.</h2>
          <div>
            {/* Symbole */}
            <p className="titre">
              <b>Adresse-Mail</b>
            </p>
            <p>
              <b>Caf.the@gmail.com</b>
            </p>
          </div>
          <p>
            <b>Suivez-nous sur nos réseaux sociaux :</b>
          </p>
          <div>
            <div className="rs">
              <a
                href="#"
                className="text-green-400 text-xl hover:text-green-300"
              >
                <FaFacebookF />
              </a>
            </div>
            <div className="rs">
              <a
                href="#"
                className="text-green-400 text-xl hover:text-green-300"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="rs">
              <a
                href="#"
                className="text-green-400 text-xl hover:text-green-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
