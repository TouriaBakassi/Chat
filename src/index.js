import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Navbar } from './Navbar';
import { Chat } from './Chat';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <Chat />
  </React.StrictMode>
);


