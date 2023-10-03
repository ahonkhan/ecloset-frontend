import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GlobalContext } from './context/GlobalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <GlobalContext>
      <App />
    </GlobalContext>
  </BrowserRouter>,
)
