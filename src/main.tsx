import { createRoot } from 'react-dom/client';
import App from './App';
import React from 'react';

// add ! : to be sur that the valur is never null
const container = document.getElementById("root")!;

// Create root by using paths from function App
const root = createRoot(container);
root.render(
// strict mode help if thhere is bug
    <React.StrictMode>
        <App />
    </React.StrictMode>
);