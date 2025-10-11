import React, { useContext, useState } from "react";
import { BlogContext } from "../App";
import { Link } from "react-router-dom";




export default function ProfilePage() {

  // form state
  const [title, settitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [imageFile, setImageFile] = useState(null)

  // access of context
  const { uplodeBlog ,userAllBlog  , userDetails} = useContext(BlogContext)

  // Add Blog Form open/close state
  const [isAddBlogOpen, setisAddBlogOpen] = useState(false)



  const handleAddBlogOpenOption = () => {
    setisAddBlogOpen(!isAddBlogOpen);

    //  Thoda wait kro Add Blog form render hone ke liye
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 200); // 0.2 second ka wait
  };



  const handleAddBlog = () => {

    if (!title || !content || !category || !imageFile) {
      alert("Please fill all the fields")
      return
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("blogImage", imageFile);
     uplodeBlog(formData)
    .then((res) => {
      if(res.data.success)
      settitle('')
      setContent('')
      setCategory('')
      setImageFile(null)
    })

    
  }






  return (
    <div className="container mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row gap-8">

        {/* Left Profile Card */}
        <div className="w-full md:w-1/3 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-col items-center">
            <img
              src={userDetails?.avatar || "https://i.ibb.co/2NfG6kK/avatar.png"}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover mb-4"
            />
            <h2 className="text-2xl font-bold">{userDetails?.fullName || 'Name'}</h2>
            <p className="text-gray-500 text-sm mb-3">{userDetails?.email || userDetails?.username}</p>

            {/* Blog Count */}
            <div className="flex space-x-6 text-gray-600 my-4">
              <span>✍️ {userAllBlog?.length} Blogs</span>
            </div>

            <p className="text-center text-gray-600 text-sm">
             {userDetails?.bio || "Frontend Developer skilled in React.js, Tailwind CSS, and building user-friendly web apps."}
            </p>

            {/* Buttons: Add Blog + Edit Profile */}
            <div className="flex space-x-4 mt-5">
              <button
                onClick={() => handleAddBlogOpenOption()}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                ➕ Add Blog
              </button>
              <Link to={'/biopage'} className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-300">
                ✏️ Edit Profile
              </Link>
            </div>
          </div>
        </div>



        {/* Right Side Blogs with Scroll */}
        <div className="w-full md:w-2/3">
          <h3 className="text-xl font-semibold mb-4">My Blogs</h3>

          {/* 👇 Fixed Height + Scroll Only in Blog Section */}
          <div className="h-[500px] overflow-y-scroll scroll-smooth pr-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {userAllBlog?userAllBlog.map((blog) => (
                <div key={blog._id} className="bg-white shadow-md rounded-xl overflow-hidden">
                  <img src={blog.blogImage} alt={blog.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h4 className="font-bold text-lg">{blog.title}</h4>
                    <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
                    <button className="mt-3 text-sm text-blue-600 hover:underline">
                      Read More →
                    </button>
                  </div>
                </div>
              )):(
                <div> there is not blog </div>
              )}
            </div>
          </div>
        </div>

      </div>


      {
        isAddBlogOpen && (
          <div className="max-w-3xl mx-auto mt-10 p-8 rounded-xl shadow-lg bg-gray-100 relative">
            {/* ❌ Cut Button */}
            <button
              onClick={() => setisAddBlogOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-xl font-bold"
              title="Close"
            >
              ✖
            </button>

            <h1 className="text-2xl font-bold mb-6 text-center">Add New Blog</h1>

            <form className="flex flex-col gap-5">
              {/* Title */}
              <div>
                <label className="block font-medium mb-1">Title</label>
                <input
                  onChange={(e) => settitle(e.target.value)}
                  value={title}
                  type="text"
                  placeholder="Enter blog title"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block font-medium mb-1">Content</label>
                <textarea
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                  placeholder="Write your blog content..."
                  rows="6"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Category */}
              <div>
                <label className="block font-medium mb-1">Category</label>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">-- Select Category --</option>
                  <option value="technology">Technology</option>
                  <option value="travel">Travel</option>
                  <option value="food">Food</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="fashion">Fashion</option>
                  <option value="health">Health</option>
                  <option value="science">Science</option>
                  <option value="art">Art</option>
                  <option value="books">Books</option>
                  <option value="movies">Movies</option>
                  <option value="music">Music</option>
                </select>
              </div>
              {/* Image Upload */}
              <div>
                <label className="block font-medium mb-1">Upload Image</label>
                <input
                  onChange={(e) => setImageFile(e.target.files[0])}
                  type="file"
                  accept="image/*"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={() => handleAddBlog()}
                type="button"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add Blog
              </button>
            </form>
          </div>
        )
      }

    </div>
  );
}
