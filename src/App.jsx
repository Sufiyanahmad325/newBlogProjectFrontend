import { createContext, useState } from 'react'
import './App.css'
import Header from './MainPage/Header'
import { Outlet } from 'react-router-dom'
import LoginForm from './MainPage/LoginForm'

export const BlogContext = createContext()
function App() {
  const [openLoingForm, setOpenLoingForm] = useState(false) // default false

  return (
    <BlogContext.Provider value={{ openLoingForm, setOpenLoingForm }}>
      <div className="">
        <Header />
        <Outlet />
        <LoginForm />
      </div>
    </BlogContext.Provider>
  )
}

export default App
