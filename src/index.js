import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

const root = document.getElementById('root');

render(
  <StrictMode>
    <App />
  </StrictMode>,
  root,
);
