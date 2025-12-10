import { createContext, useEffect, useState } from 'react'
import './App.css'
import Header from './MainPage/Header'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import LoginForm from './MainPage/LoginForm'
import Signup from './SignUp'
import { Cookies, useCookies } from 'react-cookie'
import axios from 'axios'
import LodingPage from './MainPage/LodingPage'


export const BlogContext = createContext()
function App() {

  // state is here
  const [openLoingForm, setOpenLoingForm] = useState(false) // default false
  const [signUp, setSignUp] = useState(false)
  const [userDetails, setUserDetails] = useState(null)
  const [allBlogPost, setAllBlogPost] = useState(null)
  const [userAllBlog, setUserAllBlog] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

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
          setAllBlogPost(null)
          navigate('/')
          removeCookie("accessToken", { path: "/" })
          alert(res.data.message)
        }
      } catch (error) {
        alert(error.message)
      }
    } else {
      // setOpenLoingForm((prev) => !prev);
      navigate('/login')
    }
  }



  const uplodeBlog = async (formData) => {
    setIsLoading(true)
    const res = await axios.post("http://localhost:8000/api/v1/users/uploadBlog",
      formData,
      {
        headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'multipart/form-data' },
        withCredentials: true
      }
    )

    if (res.data.success) {
      setIsLoading(false)

      setAllBlogPost([...allBlogPost, res.data.data])
      setUserAllBlog([...userAllBlog, res.data.data])
      setTimeout(() => {
        alert("Blog uploded successfully")
      }, 500);
      return res
    }
    else {
      setIsLoading(false)
      setTimeout(() => {
        alert("Failed to uplode blog")
      }, 500);
    }

  }



  const updateProfileDetails = async (formData) => {
    console.log('form data', formData)
    setIsLoading(true)
    let res = await axios.post("http://localhost:8000/api/v1/users/update-user-profile",
      formData,
      {
        headers: { 'Authorization': `Bearer ${accessToken}`, "Content-Type": "multipart/form-data" },
        withCredentials: true
      }

    )

    if (res.data.success) {
      setIsLoading(false)
      setUserDetails(res.data.data)
      console.log(res.data.data)
      navigate('/profile')
      setTimeout(() => {
        alert('apdated successfully')
      }, 500);
    }
    else {
      setIsLoading(false)
      setTimeout(() => {
        alert("Failed to update profile")
      }, 500);
    }

  }


  const LikeBlog = async (blogId) => {
    let res = await axios.post(
      "http://localhost:8000/api/v1/users/like-blog",
      { blogId }, // ✅ sirf id pass ho rahi hai
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      }
    );

    if (res.data.success) {
      // Update the specific blog's likes in allBlogPost state
      setAllBlogPost((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog._id === blogId ? { ...blog, likes: res.data.data.likes } : blog
        )
      );
      console.log("Liked successfully:", res);
    }
  };



  const editYourBlog = async (updatedData) => {
    setIsLoading(true)
    const res = await axios.post('http://localhost:8000/api/v1/users/edit-blog',
      updatedData,
      {
        headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'multipart/form-data' },
        withCredentials: true
      }
    )
    if (res.data.success) {
      console.log(res)
      let data = allBlogPost?.map(blog => blog._id == res.data.data._id ? { ...blog, ...res.data.data } : blog)
      setAllBlogPost(data)
      navigate(-1)
      setIsLoading(false)

    } else {
      setIsLoading(false)
      setTimeout(() => {
        alert('edit/Update failed')
      }, 500);
    }
  }



  const deleteBlog = async (blogId) => {
    try {
      let res = await axios.post('http://localhost:8000/api/v1/users/delete-blog',
        { blogId: blogId },
        {
          headers: { 'Authorization': `Bearer ${accessToken}`, "Content-Type": "application/json" },
          withCredentials: true
        }
      )

      if (res.data.success) {
        console.log(res.data.data)
        setAllBlogPost(res.data.data)
      }

    } catch (error) {
      console.log(error.message)
    }
  }


  const changeAccountPassowrd = async (oldPassword, newPassword) => {
    setIsLoading(true)
    try {
      const res = await axios.post('http://localhost:8000/api/v1/users/change-password', { oldPassword, newPassword },
        {
          headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
          withCredentials: true
        }
      )
      if (res.data.success) {
        setIsLoading(false)
        return res
      }
    } catch (error) {
      setIsLoading(false)
      setTimeout(() => {
        alert("Password change failed")
      }, 500);
    }
  }


  const deleteAccount =async(password)=>{
    setIsLoading(true)
      try {
        let res = await axios.post('http://localhost:8000/api/v1/users/delete-account',{password},
          {
            headers:{'Authorization':`Bearer ${accessToken}` , 'Content-Type':'application/json'},
            withCredentials:true
          }
        )

        if(res.data.success){
          setIsLoading(false)
          setUserDetails(null)
          setUserAllBlog(null)
          setAllBlogPost(null)
          navigate('/')
          removeCookie("accessToken", { path: "/" })
          alert(res.data.message)
          return res
        }
      } catch (error) {
        setIsLoading(false)
        setTimeout(() => {
          alert(error.message)
          console.log(error.message)
        }, 500);
      }
  }

  // restore user from cookie
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/v1/users/current-user-allUserBlog', {
          withCredentials: true,
        });

        if (res.data.success) {
          if (userDetails == null) {
            setUserDetails(res.data.data.user);
          }
          setAllBlogPost(res.data.data.allUserBlog || []);
          console.log("✅ User restored from cookie:", res.data.data.user);
        }
      } catch (err) {
        console.log("Error fetching user:", err);
        removeCookie("accessToken", { path: "/" });
        navigate('/login')
      }
    };

    fetchUserData();
  }, [userDetails, accessToken]); // 👈 sirf ek baar page load hone par chale



  // filter user specific blogs
  useEffect(() => {
    const userBlog = allBlogPost?.filter((blog) => blog.author === userDetails?._id) || [];
    setUserAllBlog(userBlog)
  }, [userDetails, allBlogPost]);




  return (
    <BlogContext.Provider value={{ openLoingForm, setOpenLoingForm, setSignUp, signUp, userDetails, setUserDetails, handleLonginForm, allBlogPost, uplodeBlog, userAllBlog, setUserAllBlog, updateProfileDetails, LikeBlog, editYourBlog, deleteBlog, isLoading, setIsLoading, changeAccountPassowrd ,deleteAccount }}>
      <div className="">
        <Header />
        <Outlet />
        {/* <LoginForm />
        <Signup /> */}
        <LodingPage />
      </div>
    </BlogContext.Provider>
  )
}

export default App
