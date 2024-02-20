import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header';
import Service from './components/Service';
import Guarantee from './components/Guarantee';
import About from './components/About';
import Free from './components/Free';
import Result from './components/Result';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Service />
    <Guarantee />
    <About />
    <Result />
    <Free />
  </React.StrictMode>
);


