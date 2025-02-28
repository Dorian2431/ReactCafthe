import { useEffect, useState } from "react";
import axios from "axios";

function Filtre({ onSelectCategory }) {
  const valeurParDefaut = [{ id: -1, nom: "Toutes" }];
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchFiltre = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/categorie");
        setCategories(valeurParDefaut.concat(response.data.concat()));
      } catch (error) {
        console.error("Erreur du chargement des categories", error);
      }
    };
    void fetchFiltre();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("-1"); // état pour stocker la catégorie sélectionnée
  const handleChange = (event) => {
    setSelectedCategory(event.target.value); // met à jour l'état avec la catégorie sélectionnée
    onSelectCategory(event.target.value); // Appelle la fonction de callback du parent pour transmettre la key
  };

  return (
    <div>
      <label>Filtre</label>
      <select onChange={(e) => handleChange(e)}>
        {categories.map((option) => (
          <option key={option.id} value={option.id}>
            {option.nom}
          </option>
        ))}
      </select>
      <div>la sélection du filtre : {selectedCategory}</div>
    </div>
  );
}

// function Filtre() {
//   const [produits, setProduits] = useState([]);
//   const [categories, setCategories] = useState([]);

//   const fetchfiltre = (categorie) => {
//     fetch(`http://localhost:3001/cathegorie/${categorie}`)
//       .then((response) => response.json()) //Recoit la reponse et la convertit en .json
//       .then((data) => setProduits(data)) //Met a jour Produits
//       .catch((error) => console.error("Erreur de produit", error)); //Permet d'afficher dans la console,le message si une erreur se produit
//   };

//   useEffect(() => {
//     //On utilise useEffct qui est un hook
//     if (categorie === "Tous") {
//       fetchfiltre(1, 2, 3);
//     } else {
//       fetchfiltre(categorie.toLowerCase());
//     }
//   }, [categorie]); //fetchfiltre, va etre exéxcuté a chaque fois que la variable categorie change

//   return (
//     <div>
//       <select
//         name="filtre"
//         value={categorie} //Cathegorie est liée a select
//         onChange={(e) => setCategorie(e.target.value)} //A chaque changement OnChange va se déclencher et setCategorie va etre appelée
//       >
//         <option value="Tous">Tous</option>
//         <option value="the">Thé</option>
//         <option value="cafe">Café</option>
//         <option value="accessoires">Accessoires</option>
//       </select>
//       <div>
//         {produits.map((produit) => (
//           <li key={produit.id}>{produit.nom}</li>
//         ))}
//       </div>
//     </div>
//   );
// }

export default Filtre;
