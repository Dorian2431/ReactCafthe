import React from "react";
import "../styles/ml.css";

function Mentionlegale(props) {
  return (
    <div className="ml-texte">
      <h1 className="ml-titre">Mentions légales</h1>
      <h3 className="ml-h3">1. ÉDITEUR DU SITE</h3>
      <p className="ml-1">
        Dorian koeiscop
        <br />
        5 avenue de Vendôme - 41000 Blois <br />
        Téléphone : 06 07 08 09 010 <br />
        Email : Dorian.koeiscop@gmail.com
      </p>
      {/*__________________________________________________*/}
      <h3 className="ml-h3">2. HÉBERGEUR DU SITE</h3>
      <p className="ml-1">
        Le site est hébergé par le CCI Campus Centre <br />
        16 Place Saint Cyran <br />
        36000 Châteauroux, France
      </p>
      {/*__________________________________________________*/}
      <h3 className="ml-h3">3. PROPRIÉTÉ INTELLECTUELLE</h3>
      <p className="ml-1">
        Tous les contenus présents sur ce site, y compris, les textes, images,
        vidéos, graphismes, logos et icônes, sont protégés par les lois en
        vigueur sur la propriété intellectuelle et appartiennent exclusivement à
        Cafthé ou sont utilisés avec l’autorisation de leurs propriétaires
        respectifs. Toute reproduction des contenus du site, par quelque procédé
        que ce soit, sans l’autorisation préalable est strictement interdite.
      </p>
      {/*__________________________________________________*/}
      <h3 className="ml-h3">4. RESPONSABILITÉ</h3>
      <p className="ml-1">
        Cafthé fait tout son possible pour garantir la précision et la mise à
        jour des informations sur le site, et se réserve le droit de modifier le
        contenu à tout moment. Les informations et images sont fournies à titre
        indicatif et ne constituent en aucun cas un engagement qui pourrait
        entraîner une action en justice. <br /> Cafthé ne pourra être
        responsable des dommages directs ou indirects - peu importe leurs
        causes, origines, natures ou conséquences - liés à l'accès au site, à
        son utilisation ou à l’impossibilité d’y accéder, ainsi que des
        éventuels dommages matériels subis par les utilisateurs.
      </p>

      {/*__________________________________________________*/}
      <h3 className="ml-h3">5. PROTECTION DES DONNÉES</h3>
      <p className="ml-1">
        Cafthé applique la loi 78-17 du 6 janvier 1978 relative à
        "l'information, aux fichiers et aux libertés" dans le cadre des
        commandes passées sur notre site. Si vous avez des questions concernant
        notre <a href="./Politique">politique de confidentialité</a> ou la
        protection de vos données. <br /> N’hésitez pas à nous contacter à
        l’adresse suivante : [dorian.fauxmail@gmail.com].
      </p>
      {/*__________________________________________________*/}
      <h3 className="ml-h3">6. RESSOURCES UTILISÉES</h3>
      <p className="ml-1">
        Les icones et images utilisés dans le site sont issus de <br />
        <a href="https://fontawesome.com/">Fontawesome.com</a> <br />
        <a href="https://fr.freepik.com/">FreePik</a> <br />
        <a href="https://react-icons.github.io/react-icons/">React-icons</a>
      </p>
      {/*__________________________________________________*/}
    </div>
  );
}

export default Mentionlegale;
