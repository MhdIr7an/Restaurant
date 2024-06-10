import React from 'react'
import ReactDOM from 'react-dom/client'

import './main.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App, Reservation } from './Pages'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path='/' element={<App />} />
          <Route path='/reservation' element={<Reservation />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
