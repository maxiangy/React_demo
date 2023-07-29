import React from 'react'
import ReactDOM from 'react-dom/client'
import "reset-css"
import "@/assets/styles/global.scss"
import  Router  from "./Router/index.tsx";
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
