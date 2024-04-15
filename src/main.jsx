import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NavbarProvider } from './Contexts/navbarContext.jsx'
import { ThemeProvider } from './Contexts/themeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavbarProvider>

    <ThemeProvider>

    <App />
    </ThemeProvider>
    </NavbarProvider>
  </React.StrictMode>,
)
