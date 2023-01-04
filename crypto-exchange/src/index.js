import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
//styles
import './index.css';
//context
import App from './App';
import CoinsContextProvider from './context/CoinsContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CoinsContextProvider>
      <App />
    </CoinsContextProvider>
  </BrowserRouter>
);