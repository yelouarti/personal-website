import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';
import './i18n';
import reportWebVitals from './reportWebVitals';
import {LanguageProvider} from "./components/header/LanguageContext";
import './index.css';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <LanguageProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </LanguageProvider>
  </React.StrictMode>
);

reportWebVitals();
