import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Text from './Text';
import App from './App';
import Number from './Number';
import Scrolling from './Scrolling';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Text />
    <Number />
    <Scrolling />
  </StrictMode>
);
