import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UsuarioProvider } from './context/Usuario';
import { FeedProvider } from './context/Feed';
// import { ModalProvider } from './context/Modal';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <UsuarioProvider>
      <FeedProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FeedProvider>
    </UsuarioProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
