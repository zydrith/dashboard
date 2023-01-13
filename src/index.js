import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

const root = document.getElementById('root');

const ReactRoot = ReactDOM.createRoot(root)
ReactRoot.render(
    <ContextProvider>
        <App />
    </ContextProvider>


);