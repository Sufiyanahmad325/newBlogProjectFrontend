import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeMain from './MainPage/HomeMain.jsx'
import AllBlog from './MainPage/AllBlog.jsx'
import BlogCategories from './MainPage/BlogCategories.jsx'
import ProfilePage from './MainPage/Profiles.jsx'
import ReadMore from './ReadMore.jsx'
import { CookiesProvider } from 'react-cookie'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<HomeMain />} />
          <Route path='/all-blog' element={<AllBlog />} />
          <Route path='/categories' element={<BlogCategories/>} />
          <Route path='/profile' element={<ProfilePage/>} />
          <Route path='/readMore' element={<ReadMore/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </CookiesProvider>
  </StrictMode>,
)
