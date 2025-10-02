import { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../App";

export default function Header() {
  const {openLoingForm, setOpenLoingForm} = useContext(BlogContext)
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-16 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">BLOG</Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link
            to="/"
            className="hover:text-black border-b-2 border-transparent hover:border-black"
          >
            Home
          </Link>
          <Link
            to="/all-blog"
            className="hover:text-black border-b-2 border-transparent hover:border-black"
          >
            All Blogs
          </Link>
          <Link
            to="/categories"
            className="hover:text-black border-b-2 border-transparent hover:border-black"
          >
            Categories
          </Link>
          <Link
            to="/about"
            className="hover:text-black border-b-2 border-transparent hover:border-black"
          >
            About
          </Link>
        </nav>

        {/* Profile + Login */}
        <div className="flex items-center space-x-3" onClick={()=> setOpenLoingForm(prev=> !prev)}>
          <img
            src="https://i.pravatar.cc/306"
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-gray-700 font-medium" >Logged in</span>
          <button className="text-gray-600 hover:text-black">
            🔒
          </button>
        </div>
      </div>
    </header>
  );
}
