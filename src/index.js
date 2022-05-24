import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductsListingProvider } from "./context/product-listing-context";
import { CategoriesProvider } from "./context/categories-context";
import { WindowDimensionProvider } from "./context/window-context";
import { AuthProvider } from "./context/auth-context";
import { UserProvider } from "./context/user-context";
import { AlertProvider } from "./context/alert-context";
import { CartProvider } from "./context/cart-context";
import { WishlistProvider } from "./context/wishlist-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WindowDimensionProvider>
      <AlertProvider>
        <AuthProvider>
          <UserProvider>
            <CategoriesProvider>
              <CartProvider>
                <WishlistProvider>
                  <ProductsListingProvider>
                    <App />
                  </ProductsListingProvider>
                </WishlistProvider>
              </CartProvider>
            </CategoriesProvider>
          </UserProvider>
        </AuthProvider>
      </AlertProvider>
      </WindowDimensionProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
