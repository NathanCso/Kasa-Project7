// Importation des éléments
import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import ReactRoutes from './components/React-Routes/Routes'; 
import {BrowserRouter} from "react-router-dom";
import './styles/index.css'

// Options pour lier la page à la racine
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( 
  <BrowserRouter>
    <ReactRoutes />
  </BrowserRouter>
);
