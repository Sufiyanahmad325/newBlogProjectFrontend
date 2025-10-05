import { createContext, useState } from 'react'
import './App.css'
import Header from './MainPage/Header'
import { Outlet } from 'react-router-dom'
import LoginForm from './MainPage/LoginForm'
import Signup from './SignUp'

export const BlogContext = createContext()
function App() {
  const [openLoingForm, setOpenLoingForm] = useState(false) // default false
  const [signUp, setSignUp] = useState(false)

  return (
    <BlogContext.Provider value={{ openLoingForm, setOpenLoingForm  ,setSignUp , signUp}}>
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
