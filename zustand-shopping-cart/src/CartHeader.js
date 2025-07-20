// src/CartHeader.js
import React from "react";
import useCartStore from "./useCartStore";
import useAuthStore from "./useAuthStore";

function CartHeader() {
  const cartItems = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const { login, logout, isAuthenticated } = useAuthStore();
  return (
    <header>
      <h1>My Awesome Store</h1>
      <p>Items in Cart: {cartItems.length}</p>
      <button onClick={clearCart}>Clear Cart</button>
      {isAuthenticated ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <button onClick={() => login()}>Login</button>
      )}
    </header>
  );
}

export default CartHeader;
