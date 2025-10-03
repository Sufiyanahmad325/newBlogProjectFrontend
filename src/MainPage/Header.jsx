import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../App";

export default function Header() {
  const { openLoingForm, setOpenLoingForm } = useContext(BlogContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-16 py-4 flex items-center justify-between">

        <div className="text-2xl font-bold">
          <Link to="/">BLOG</Link>
        </div>

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
            to="/profile"
            className="hover:text-black border-b-2 border-transparent hover:border-black"
          >
            Profile
          </Link>
        </nav>

        {/* Profile + Login */}
        <div
          className="hidden md:flex items-center space-x-3 cursor-pointer"
          onClick={() => setOpenLoingForm((prev) => !prev)}
        >
          <img
            src="https://i.pravatar.cc/306"
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-gray-700 font-medium">Logged in</span>
          <button className="text-gray-600 hover:text-black">🔒</button>
        </div>


        {/*  responsive design start from here */}
        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t px-6 py-4 space-y-4 text-gray-700 font-medium">
          <Link to="/" className="block hover:text-black" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/all-blog" className="block hover:text-black" onClick={() => setMenuOpen(false)}>All Blogs</Link>
          <Link to="/categories" className="block hover:text-black" onClick={() => setMenuOpen(false)}>Categories</Link>
          <Link to="/profile" className="block hover:text-black" onClick={() => setMenuOpen(false)}>Profile</Link>

          {/* Mobile Profile */}
          <div
            className="flex items-center space-x-3 pt-4 border-t cursor-pointer"
            onClick={() => {
              setOpenLoingForm((prev) => !prev);
              setMenuOpen(false);
            }}
          >
            <img
              src="https://i.pravatar.cc/306"
              alt="profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-gray-700 font-medium">Logged in</span>
            <button className="text-gray-600 hover:text-black">🔒</button>
          </div>
        </div>
      )}
    </header>
  );
}
