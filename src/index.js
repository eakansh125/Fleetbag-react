import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";

//Make server call
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>        
  </React.StrictMode>,
  document.getElementById('root')
);


