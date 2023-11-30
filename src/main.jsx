import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App  from './App.jsx'
import Sidebar from './components/sidebar.jsx';
import Home from './components/Home.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
)
