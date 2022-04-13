import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
// import { CartProvider } from './Context/cart-context';
import CartProvider from './Context/cart-context'

//Make server call
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <CartProvider>
    <App />
  </CartProvider>
  </BrowserRouter>        
  </React.StrictMode>,
  document.getElementById('root')
);


