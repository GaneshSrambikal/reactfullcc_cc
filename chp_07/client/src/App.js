import React from "react";
import "./App.css";
import Product from "./components/Product";
import ProductList from "./productList";
function App() {
  const productComponents = ProductList.map(item => (
    <Product key={item.id} product={item} />
  ));

  return (
    <div className="App">
      <div className="container">{productComponents}</div>
    </div>
  );
}

export default App;
