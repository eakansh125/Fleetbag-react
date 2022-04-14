import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import CartWishlistContextProvider from './Context/cart-context';

//Make server call
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <CartWishlistContextProvider>
    <App />
  </CartWishlistContextProvider>
  </BrowserRouter>        
  </React.StrictMode>,
  document.getElementById('root')
);


