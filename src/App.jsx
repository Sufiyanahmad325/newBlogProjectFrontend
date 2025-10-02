import { useState } from 'react'
import './App.css'
import Header from './MainPage/Header'
import TwoBigCardBelowHader from './MainPage/TwoBigCardBelowHader'
import BlogCard from './MainPage/BlogCard'
import LoginForm from './MainPage/LoginForm'

function App() {
  const [openLoingForm, setOpenLoingForm] = useState(false) // default false

  return (
    <div className="">
      <Header setOpenLoingForm={setOpenLoingForm} />
      <TwoBigCardBelowHader />
      <BlogCard />
      
    </div>
  )
}

export default App
