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
              Chez Cafthe, nous sommes fiers de collaborer avec des producteurs
              passionnés qui partagent notre amour pour le café et le thé de
              qualité. Chaque producteur apporte son savoir-faire unique et son
              respect des traditions, garantissant des produits exceptionnels,
              de l'origine à la tasse. Nous croyons que la qualité commence dès
              la plantation, et c'est pourquoi nous avons choisi de travailler
              avec des producteurs engagés à offrir le meilleur de leur récolte.
              Nos producteurs, Alice, Alberto et Anthonie, cultivent avec soin
              les meilleures variétés de café et de thé. Leur savoir-faire et
              leur respect de l'environnement nous permettent de vous offrir une
              expérience gustative authentique et de qualité. De l'arbre à la
              tasse, nous vous invitons à découvrir le parcours de chaque
              producteur et l'histoire unique qui se cache derrière chaque grain
              de café ou chaque feuille de thé.
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
            Alice cultive des feuilles de thé d'exception dans les montagnes
            d'Asie. Son savoir-faire ancestral et ses méthodes respectueuses de
            l'environnement garantissent un thé raffiné, pur et d'une qualité
            supérieure.
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
            Alberto produit un Café Arabica de qualité supérieure dans les
            montagnes d'Amérique Latine. Il utilise des méthodes durables pour
            offrir des grains doux et riches en saveurs, parfaits pour les
            amateurs de café fin.
          </p>
        </div>
        <div className="Producteur">
          <div className="Nom">
            <b>
              <p>Alberto</p>
            </b>
          </div>
          <img
            src="/alberto.jpg"
            alt="Logo cafthé marron et vert"
            className="img-producteur"
          />
          <p>
            Anthonie cultive un thé noir au goût puissant et complexe. Ses
            méthodes artisanales et respectueuses de la nature lui permettent de
            créer un thé authentique, riche en arômes et parfait pour les
            connaisseurs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Producteur;
