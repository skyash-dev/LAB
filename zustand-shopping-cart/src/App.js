// src/App.js
import React from "react";
import CartHeader from "./CartHeader";
import ProductList from "./ProductList";
import "./App.css"; // You can add some basic styling

function App() {
  return (
    <div className="App">
      <CartHeader />
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
