import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import InTheWoods from './components/InTheWoods.jsx'
import SusanRipp from './components/SusanRipp.jsx'
import SodaShop41 from './components/SodaShop41.jsx'
import ErynDavis from './components/ErynDavis.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import './index.css'
import './brand.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <CustomCursor />

      <Routes>

        <Route
          path="/"
          element={<App />}
        />

        <Route
          path="/work/in-the-woods"
          element={<InTheWoods />}
        />

        <Route
          path="/work/susan-ripp"
          element={<SusanRipp />}
        />

        <Route
          path="/work/soda-stop-concept"
          element={<SodaShop41 />}
        />

        <Route
          path="/work/soda-shop-41"
          element={<SodaShop41 />}
        />

        <Route
          path="/work/eryn-davis"
          element={<ErynDavis />}
        />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)