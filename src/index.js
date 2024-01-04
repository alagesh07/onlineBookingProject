import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import backgroundVideo from './123.mp4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <video autoPlay loop muted className='background-video'>
      <source src={backgroundVideo} type="video/mp4" />
    </video>
    <div className="overlay"></div>
      <div className="content-overlay"></div>
    <App />
  </React.StrictMode>
);
reportWebVitals();
