import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux'; // Import the Provider component
import store from './store.js'; // Import the Redux store

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the App component with the Provider, passing the Redux store as a prop */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
