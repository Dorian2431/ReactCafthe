import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faMapLocation,
  faPhoneVolume,
  faTurnDown,
  facebook,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <img className="img" src={"/footer.png"} alt="Description de l'image" />
      <div className="footer2">
        <div className="test">
          <img
            className="logo"
            src={"/logoco.png"}
            alt="Description de l'image"
          />
          <div>
            <a className="lien" href="/Mentionlegale">
              <b>Mention Légale</b>
            </a>
            <br></br>
            <a className="lien" href="/Politique">
              <b>Politique de confidentialité</b>
            </a>
          </div>
        </div>

        <div>
          <h2 className="contact">Contact</h2>
          <div>
            {/* Symbole */}
            <p className="titre">
              <b>
                {" "}
                <FontAwesomeIcon icon={faMapLocation} /> Adresse
              </b>
            </p>{" "}
            <p className="nom">
              <b>18 rue de la motte de beurre</b>
            </p>
          </div>
          <div>
            {/* Symbole */}
            <p className="titre">
              <b>
                {" "}
                <FontAwesomeIcon icon={faPhoneVolume} /> Téléphone{" "}
              </b>
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
              <b>
                <FontAwesomeIcon icon={faEnvelope} /> Adresse-Mail
              </b>
            </p>
            <p>
              <b>Caf.the@gmail.com</b>
            </p>
          </div>
          <p className="titre">
            <b>
              <FontAwesomeIcon icon={faTurnDown} /> Suivez-nous sur nos réseaux
              sociaux :
            </b>
          </p>
          <div>
            <div className="rs">
              <div className="rs4">
                <a className="lien" href="/">
                  <FaTwitter />{" "}
                </a>
              </div>
              <div className="rs2">
                <a className="lien" href="/">
                  <FaInstagram />
                </a>
              </div>
              <div className="rs3">
                <a className="lien" href="/">
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
