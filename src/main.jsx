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
import BioPage from './MainPage/BioPage.jsx'
import BlogDetails from './MainPage/BlogDetails.jsx'
import EditBlogForm from './MainPage/EditBlogForm.jsx'
import LoginForm from './MainPage/LoginForm.jsx'
import Signup from './SignUp.jsx'
import Settings from './MainPage/Settings.jsx'
import ChangePassword from './MainPage/ChangePassword.jsx'
import PrivacyPolicy from './MainPage/PrivacyPolicy.jsx'
import TermsAndConditions from './MainPage/TermsAndConditions.jsx'
import DeleteAccount from './MainPage/DeleteAccount.jsx'


createRoot(document.getElementById('root')).render(
  <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<HomeMain />} />
          <Route path='/all-blog' element={<AllBlog />} />
          <Route path='/categories' element={<BlogCategories />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/readMore' element={<ReadMore />} />
          <Route path="/edit-blog-form/:id" element={<EditBlogForm />} />
          <Route path="/blogDetails/:id" element={<BlogDetails />} />
          <Route path='/biopage' element={<BioPage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signUp' element={<Signup />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/biopage' element={<BioPage />} />
          <Route path='/change-Password' element={<ChangePassword />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/delete-account" element={<DeleteAccount />} />


        </Route>
      </Routes>
    </BrowserRouter>
  </CookiesProvider>
)
