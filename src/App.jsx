import { createContext, useEffect, useState } from 'react'
import './App.css'
import Header from './MainPage/Header'
import { Outlet } from 'react-router-dom'
import LoginForm from './MainPage/LoginForm'
import Signup from './SignUp'
import { Cookies, useCookies } from 'react-cookie'
import axios from 'axios'

export const BlogContext = createContext()
function App() {

  // state is here
  const [openLoingForm, setOpenLoingForm] = useState(false) // default false
  const [signUp, setSignUp] = useState(false)
  const [userDetails, setUserDetails] = useState(null)
  const [allBlogPost, setAllBlogPost] = useState(null)


  // cookies
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken'])
  const accessToken = cookies.accessToken || null           // ye acessToken ka kaha ja rha hai 
  console.log(accessToken)       

  async function handleLonginForm() {

    if (userDetails != null) {
      try {
        const res = await axios.get('http://localhost:8000/api/v1/users/logout', {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
          withCredentials: true
        })

        if (res.data.success) {
          setUserDetails(null)
          removeCookie("accessToken", { path: "/" })
          alert(res.data.message)
        }
      } catch (error) {
        alert(error.message)
      }
    } else {
      setOpenLoingForm((prev) => !prev);
    }
  }


  useEffect(() => {
    if (!accessToken) return  // only skip if token is missing
  
    const fetchUserData = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/v1/users/current-user', {
          headers: { 'Authorization': `Bearer ${accessToken}` },
          withCredentials: true,
        })
  
        if (res.data.success) {
          setUserDetails(res.data.data.user)
          setAllBlogPost(res.data.data.userBlog || [])
          console.log(res.data.data.userBlog)
        }
      } catch (err) {
        console.log(err)
        // Agar token expire ho gaya ho to hata do
        removeCookie("accessToken", { path: "/" })
      }
    }
  
    fetchUserData()
  }, [])
  



  return (
    <BlogContext.Provider value={{ openLoingForm, setOpenLoingForm, setSignUp, signUp, userDetails, setUserDetails, handleLonginForm, allBlogPost }}>
      <div className="">
        <Header />
        <Outlet />
        <LoginForm />
        <Signup />
      </div>
    </BlogContext.Provider>
  )
}

export default App
