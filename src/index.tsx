import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (rootElement) {
 const root = ReactDOM.createRoot(rootElement);
 root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
 );

 reportWebVitals(console.log);
} else {
  console.error('Root element not found');
}
