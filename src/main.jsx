import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeMain from './MainPage/HomeMain.jsx'
import AllBlog from './MainPage/AllBlog.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<HomeMain />} />
          <Route path='all-blog' element={<AllBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
