// src/ProductList.js
import React from "react";
import useCartStore from "./useCartStore";
import useAuthStore from "./useAuthStore";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" },
  { id: 3, name: "Keyboard" },
];

function ProductList() {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
