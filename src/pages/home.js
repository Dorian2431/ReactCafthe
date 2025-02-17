import React from "react";
import ProductList from "./ProductList";

function Home(props) {
  return (
    <div>
      <h2>Home</h2>

      <filter />
      <ProductList />
    </div>
  );
}

export default Home;
