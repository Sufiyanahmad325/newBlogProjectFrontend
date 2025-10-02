import { createContext, useState } from 'react'
import './App.css'
import Header from './MainPage/Header'
import TwoBigCardBelowHader from './MainPage/TwoBigCardBelowHader'
import BlogCard from './MainPage/BlogCard'
import LoginForm from './MainPage/LoginForm'
import { Outlet } from 'react-router-dom'

export const BlogContext = createContext()
function App() {
  const [openLoingForm, setOpenLoingForm] = useState(false) // default false

  return (
    <BlogContext.Provider value={{openLoingForm, setOpenLoingForm}}>
    <div className="">
      <Header  />
      <Outlet />
    </div>
    </BlogContext.Provider>
  )
}

export default App
