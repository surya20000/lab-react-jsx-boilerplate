import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppClass from './AppClass';
import DataComponents from './components/DataComponents';

// import AppClass from "./AppClass";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppClass myData = {DataComponents} />   
    {/* change the above line - for interchaning between App and AppClass */}
  </React.StrictMode>
);
