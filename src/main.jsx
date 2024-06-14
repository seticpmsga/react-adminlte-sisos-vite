import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/**
 * Install:
 * npm i primeicons
 * npm i primeflex
 *  */ 
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'; 

/**
 * PrimeReact
 */
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import './index.css';
import './flags.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>,
)
