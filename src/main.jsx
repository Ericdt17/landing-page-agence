import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import SiteGate from './components/SiteGate.jsx'
import "@fontsource/montserrat/latin-400.css"
import "@fontsource/montserrat/latin-500.css"
import "@fontsource/montserrat/latin-600.css"
import "@fontsource/montserrat/latin-700.css"
import "@fontsource/montserrat/latin-800.css"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <SiteGate>
        <App />
      </SiteGate>
    </HelmetProvider>
  </React.StrictMode>,
)
