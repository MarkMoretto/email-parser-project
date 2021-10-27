/* eslint-disable */
import { StrictMode } from "react"
import { render } from "react-dom"

// Main app
import App from "./components/App"

// Main css
// import "./static/css/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./static/css/styles.css"

// eslint-disable-next-line
render(
    <StrictMode>
      <App />
    </StrictMode>,
    document.getElementById("root")
)


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
