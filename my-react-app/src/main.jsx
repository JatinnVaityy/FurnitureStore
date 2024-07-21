import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import FAQ from './Footer/FAQ.jsx'
import PrivacyPolicy from './Footer/PrivacyPolicy.jsx'
import ContactUs from './Footer/ContactUs.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
