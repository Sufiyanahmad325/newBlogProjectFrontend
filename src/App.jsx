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
  const [userAllBlog, setUserAllBlog] = useState()


  // cookies
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken'])
  const accessToken = cookies.accessToken

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
          setUserAllBlog(null)
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



  const uplodeBlog = async (title, content, category, imageAdress) => {
    const res = await axios.post("http://localhost:8000/api/v1/users/uploadBlog",
      { title, content, category, blogImage: imageAdress },
      {
        headers: { 'Authorization': `Bearer ${accessToken}` },
        withCredentials: true
      }
    )

    if (res.data.success) {
      // setAllBlogPost([...allBlogPost, res.data.data])
      console.log(res.data.data)
      alert("Blog uploded successfully")
      return res
    }


    else {
      alert("Failed to uplode blog")
    }

  }

  

 useEffect(() => {
  const fetchUserData = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/v1/users/current-user', {
        withCredentials: true, 
      });

      if (res.data.success) {
        if(userDetails == null ){
          setUserDetails(res.data.data.user);
        }
        setAllBlogPost(res.data.data.userBlog || []);
        console.log("✅ User restored from cookie:", res.data.data.user);
      }
    } catch (err) {
      console.log("Error fetching user:", err);
      removeCookie("accessToken", { path: "/" });
    }
  };

  fetchUserData();
}, [userDetails , accessToken]); // 👈 sirf ek baar page load hone par chale




useEffect(() => {
  const userBlog = allBlogPost?.filter((blog) => blog.author === userDetails?._id) || [];
  setUserAllBlog(userBlog)
  console.log(userBlog)
}, [userDetails, allBlogPost]);




  return (
    <BlogContext.Provider value={{ openLoingForm, setOpenLoingForm, setSignUp, signUp, userDetails, setUserDetails, handleLonginForm, allBlogPost, uplodeBlog ,userAllBlog  , setUserAllBlog}}>
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
