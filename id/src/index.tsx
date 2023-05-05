import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'

console.warn("Why do you need a console?")

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
     <App />
);