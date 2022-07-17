import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';


const rootDOM = document.getElementById('root');
const root = ReactDOM.createRoot(rootDOM);
const class_root = rootDOM.className;

root.render(<App name={class_root} />);



