import { useEffect, useState } from "react";
import axios from "axios";

function Filtre({ onSelectCategory }) {
  const valeurParDefaut = [
    { id: 0, nom: "Toutes" },
    { id: 1, nom: "Café" },
    { id: 2, nom: "Thé" },
    { id: 3, nom: "Accessoires" },
  ];

  const [categories, setCategories] = useState(valeurParDefaut); // Valeurs par défaut
  const [loading, setLoading] = useState(true); // Pour gérer l'état de chargement
  const [error, setError] = useState(null); // Pour gérer les erreurs

  useEffect(() => {
    const fetchFiltre = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/produit`,
        );

        // Affichage des données de l'API dans la console pour vérifier leur structure
        console.log("Données de l'API :", response.data);

        if (Array.isArray(response.data)) {
          setCategories((prevCategories) => [
            ...prevCategories,
            ...response.data,
          ]);
        } else {
          throw new Error(
            "Les données retournées ne sont pas sous forme de tableau.",
          );
        }
      } catch (err) {
        setError(`Erreur lors du chargement des produits : ${err.message}`);
        console.error("Détail de l'erreur :", err);
      } finally {
        setLoading(false); // Fin du chargement
      }
    };

    fetchFiltre();
  }, []); // Charge les données une seule fois lors du premier rendu

  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleChange = (event) => {
    const selectedValue = parseInt(event.target.value, 10); // Convertir la valeur en entier
    setSelectedCategory(selectedValue);
    onSelectCategory(selectedValue); // Passe l'id sous forme de nombre
  };

  if (loading) {
    return <div>Chargement des catégories...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <label>Filtre</label>
      <select onChange={handleChange} value={selectedCategory}>
        {categories.length > 0 ? (
          categories.map((option) => (
            <option key={option.id} value={option.id}>
              {option.nom}
            </option>
          ))
        ) : (
          <option disabled>Aucune catégorie disponible</option>
        )}
      </select>
      <div>La sélection du filtre : {selectedCategory}</div>
    </div>
  );
}

export default Filtre;
