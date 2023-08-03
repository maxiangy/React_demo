import React from 'react'
import ReactDOM from 'react-dom/client'
import "reset-css"
import "@/assets/styles/global.scss"
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
//import './index.css'
//状态管理
import { Provider } from "react-redux";
//Provider 组件的作用是将 Redux 的数据仓库（store）作为 props 传递给整个应用的组件树。
//通过在应用的最顶层组件包裹 Provider 组件，可以让所有的子组件都能够访问到 Redux 的数据仓库，以便进行状态管理和更新。
import store from './store/index.ts';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  </Provider>
)
