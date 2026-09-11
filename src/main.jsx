import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import SiteGate from './components/SiteGate.jsx'
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
