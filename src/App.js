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
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="produit/:id" element={<ProductDetails />} />
            <Route path={"Producteur"} element={<Producteur />} />
            <Route path={"Mentionlegale"} element={<Mentionlegale />} />
            <Route path={"Politique"} element={<Politique />} />
            <Route path={"Compte"} element={<Compte />} />
          </Route>
          <Route path={"login"} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
