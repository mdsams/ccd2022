import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Loading from './Components/Loading';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const footer = ReactDOM.createRoot(document.getElementById('footer') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
footer.render(
    <React.StrictMode>
        <Loading />
    </React.StrictMode>,
);
