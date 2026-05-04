import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { NewApp } from './NewApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NewApp />
  </StrictMode>,
);
