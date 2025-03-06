import React from "react";
import "../styles/PDD.css";

function Politique(props) {
  return (
    <div className="pdd-texte">
      <h1 className="pdd-titre">POLITIQUE DE CONFIDENTIALITÉ</h1>
      <h3 className="pdd-h3">1. INTRODUCTION</h3>
      <p className="pdd-t">
        Bienvenue sur notre page « Politique de confidentialité » pour le site
        internet e-commerce Cafthé. <br /> Nous vous remercions d’utiliser notre
        Site et nos services de vente en ligne des produits proposés. <br /> La
        protection de la vie personnelle est un point capital pour nous et nous
        prenons la protection de vos données très au sérieux. <br /> <br />
      </p>
      {/*__________________________________________________*/}
      <h3 className="pdd-h3">2. COLLECTE DE DONNÉES</h3>
      <p className="pdd-t">
        Cafthé est le responsable du traitement des données personnelles. Cela
        signifie que nous décidons de la manière dont nous conservons et
        utilisons les données personnelles vous concernant. Nous sommes tenus,
        en vertu du RGPD, de vous fournir l'ensemble des informations présentes
        dans la Politique de confidentialité.
      </p>
      {/*__________________________________________________*/}
      <h3 className="pdd-h3">3. COOKIES ET TECHNOLOGIES SIMILAIRES</h3>
      <p className="pdd-t">
        <b>Qu'est qu'un cookie ?</b> <br />
        Une cookie est un petit texte déposé sur votre appareil lors de votre
        visite sur un site. Il permet de stocker certaines informations afin de
        faciliter votre navigations sur le site ou d'améliorer son
        fonctionnement.
        <br /> <br />
        <b>Utilisations des cookies</b> <br />
        Ces cookies sont utilisés pour garantir que les informations de votre
        panier d'achat sont conservées lorsque vous naviguez sur le site. Il
        permettent une expérience de navigation plus fluide et la gestion de
        votre panier jusqu'a la validation de votre commandes.
      </p>
      {/*__________________________________________________*/}
      <h3 className="pdd-h3">4. SÉCURITÉ DES DONNÉES</h3>
      <p className="pdd-t">
        Cafthé s’assure que les Données personnelles sont traitées en toute
        sécurité et confidentialité. A cet effet, des mesures pour éviter la
        perte et la suppression des Données personnelles sont mises en place.
        Nous avons mis en place des procédures pour traiter toute atteinte
        présumée à la sécurité des données et nous vous aviserons, ainsi que
        toute autorité de contrôle compétente, d'une atteinte présumée lorsque
        nous sommes légalement tenus de le faire. <br /> <br /> La sécurité des
        données par Internet ou des systèmes de stockage de données ne peut être
        garantie à 100 %. Si vous avez des raisons de croire que votre
        interaction avec nous n’est plus sûre, veuillez-nous en informer
        immédiatement en nous contactant aux coordonnées ci-dessous.
      </p>
      {/*__________________________________________________*/}
      <h3 className="pdd-h3">5. CONFORMITÉ LÉGALE</h3>
      <p className="pdd-t">
        Chez CafThé, nous prenons la protection des données personnelles au
        sérieux. Nous avons conçu cette politique de confidentialité en tenant
        compte des réglementations en vigueur, notamment celui sur le Règlement
        Général sur la Protection des Données (RGPD), qui régit le traitement
        des données personnelles dans l’Union Européenne.
      </p>
      {/*__________________________________________________*/}
      <h3 className="pdd-h3">
        6. MODIFICATIONS DE LA POLITIQUE DE CONFIDENTIALITÉ
      </h3>
      <p className="pdd-t">
        Nous nous réservons le droit de modifier cette politique de
        confidentialité. Toutes modifications seront publiées sur cette page. En
        cas de modications importantes, nous vous en informations par un avis
        sur notre site ou par tout autre moyen de communication approprié.
      </p>
      {/*__________________________________________________*/}
      <h3 className="pdd-h3">7. CONTACT</h3>
      <p className="pdd-t">
        Pour toute question concernant cette politique de confidentialité ou
        pour toute autre demande relative au site, vous pouvez me contacter à
        l’adresse suivante : <b>[dorian.fauxmail@gmail.com]</b>. Vous pouvez
        également nous joindre par téléphone au <b>[06 07 08 09 010]</b>
      </p>
      {/*__________________________________________________*/}
    </div>
  );
}

export default Politique;
