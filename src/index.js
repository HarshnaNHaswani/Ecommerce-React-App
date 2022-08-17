import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AlertProvider, AuthProvider, CartProvider, CategoriesProvider, ProductsListingProvider, ThemeProvider, UserProvider, WindowDimensionProvider, WishlistProvider } from "context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
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
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
