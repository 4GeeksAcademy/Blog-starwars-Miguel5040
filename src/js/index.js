import React from 'react'
import { createRoot } from 'react-dom/client'
import "../styles/index.css";
import Layout from './layout.jsx'

const root = createRoot(document.querySelector("#app"));

root.render(<Layout />);

