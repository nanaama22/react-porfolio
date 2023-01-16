import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import './assets/css/bootstrap.min.css';
import './assets/css/style.css';

// import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css'
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css'


import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
