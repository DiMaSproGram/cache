import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import '../index.css';
import App from './App.js';
import reportWebVitals from '../reportWebVitals.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const AppContainer = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  );
};

ReactDOM.hydrate(<AppContainer />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
