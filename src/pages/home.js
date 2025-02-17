import React from "react";
import ProductList from "./ProductList";

function Home(props) {
  return (
    <div>
      <filter />
      <ProductList />
    </div>
  );
}

export default Home;
