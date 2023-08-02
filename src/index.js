import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/product.context";
import { CartProvider } from "./contexts/cart.context";

//you want to think about how to nest your contexts
//do you want the User Provider to be able to Access the Products provider or the other way around?
//
// In our case we want the ProductsProvider to be able to access the UserProvider in order to get
// maybe geolocation data or something else so we want to Wrap the UserProvider around
// the ProductsProvider so that the Products Provider can reach up and get access to the
// UserProvider. The Parent Components cant necessarily get data from their children...

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
