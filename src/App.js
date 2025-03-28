import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout";
import Home from "./pages/home";
import ProductDetails from "./pages/ProductDetails";
import { AuthProvider } from "./contexte/AuthContext";
import Producteur from "./pages/Producteur";
import Login from "./pages/Login";
import Mentionlegale from "./pages/Mentionlegale";
import Politique from "./pages/Politique";
import Compte from "./pages/Compte";
import Panier from "./pages/Panier";
import Paiement from "./pages/Paiement";
import Recap from "./pages/Recap";
import Newcompte from "./pages/Newcompte";
import Motdepasse from "./pages/Motdepasse";
import ProductListCafe from "./pages/ProductListCafe";
import ProductListThe from "./pages/ProductListThe";
import ProductListAccessoire from "./pages/ProductListAccessoire";

function App() {
  return (
    <AuthProvider>
      {/*CartProvider*/}
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="produit/:id" element={<ProductDetails />} />
            <Route path="cafe" element={<ProductListCafe />} />
            <Route path="The" element={<ProductListThe />} />
            <Route path="Accessoire" element={<ProductListAccessoire />} />
            <Route path={"Producteur"} element={<Producteur />} />
            <Route path={"Mentionlegale"} element={<Mentionlegale />} />
            <Route path={"Politique"} element={<Politique />} />
            <Route path={"Compte"} element={<Compte />} />
            <Route path={"Panier"} element={<Panier />} />
            <Route path={"Paiement"} element={<Paiement />} />
            <Route path={"Recap"} element={<Recap />} />
          </Route>
          <Route path={"login"} element={<Login />} />
          <Route path={"Newcompte"} element={<Newcompte />} />
          <Route path={"Motdepasse"} element={<Motdepasse />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
