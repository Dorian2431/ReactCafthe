import React from "react";
import "../styles/Producteurs.css";

function Producteur(props) {
  return (
    <div className="page-producteur">
      <div className="centre">
        <div className="HautProducteur">
          <h1 className="titreProducteur">Nos Producteurs</h1>
          <div className="texteProducteur">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like). It is a long established
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web page
              editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected humour and
              the like).
            </p>
          </div>
        </div>
      </div>
      <div className="listeProducteur">
        <div className="Producteur">
          <div className="Nom">
            <b>
              <p>Alice</p>
            </b>
          </div>
          <img
            src="/alice.jpg"
            alt="Logo cafthé marron et vert"
            className="img-producteur"
          />
          <p>
            lorem ipsum will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </p>
        </div>
        <div className="Producteur">
          <div className="Nom">
            <b>
              <p>Anthonie</p>
            </b>
          </div>
          <img
            src="/Anthonie.jpg"
            alt="Logo cafthé marron et vert"
            className="img-producteur"
          />
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="Producteur">
          <div className="Nom">
            <b>
              <p>Alterto</p>
            </b>
          </div>
          <img
            src="/alberto.jpg"
            alt="Logo cafthé marron et vert"
            className="img-producteur"
          />
          <p>
            Making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum'
          </p>
        </div>
      </div>
    </div>
  );
}

export default Producteur;
