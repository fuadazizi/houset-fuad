import React from 'react';
import ReactDOM from 'react-dom';

import { AuthProvider } from "./context/AuthProvider"

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import reportWebVitals from './reportWebVitals';

import App from './App';

import './index.css';
import ApiConsumer from "./context/ApiConsumer";

// import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ApiConsumer>
        <App />
      </ApiConsumer>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
