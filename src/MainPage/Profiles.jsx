import React, { useState } from "react";

export default function ProfilePage() {
  const [isAddBlogOpen, setisAddBlogOpen] = useState(false)
  const blogs = [
    {
      id: 1,
      title: "Understanding React Context",
      description: "React Context provides a way to share values between components...",
      image: "https://i.pravatar.cc/205",
    },
    {
      id: 2,
      title: "Mastering TailwindCSS",
      description: "Learn how to build modern and responsive UIs quickly...",
      image: "https://i.pravatar.cc/204",
    },
    {
      id: 3,
      title: "Node.js for Beginners",
      description: "A complete guide to getting started with backend development...",
      image: "https://i.pravatar.cc/203",
    },
    {
      id: 4,
      title: "Exploring MongoDB",
      description: "Learn about MongoDB and NoSQL databases in detail...",
      image: "https://i.pravatar.cc/202",
    },
    {
      id: 5,
      title: "React vs Vue",
      description: "Comparing two popular frontend frameworks...",
      image: "https://i.pravatar.cc/201",
    },
  ];

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
  
  


  return (
    <div className="container mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row gap-8">

        {/* Left Profile Card */}
        <div className="w-full md:w-1/3 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-col items-center">
            <img
              src="https://i.pravatar.cc/200"
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover mb-4"
            />
            <h2 className="text-2xl font-bold">Sufiyan Ahmad</h2>
            <p className="text-gray-500 text-sm mb-3">Frontend Developer | Blogger</p>

            {/* Blog Count */}
            <div className="flex space-x-6 text-gray-600 my-4">
              <span>✍️ {blogs.length} Blogs</span>
            </div>

            <p className="text-center text-gray-600 text-sm">
              Passionate about building clean UIs with React.js and sharing coding knowledge.
            </p>

            {/* Buttons: Add Blog + Edit Profile */}
            <div className="flex space-x-4 mt-5">
              <button
                onClick={() => handleAddBlogOpenOption()}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                ➕ Add Blog
              </button>
              <button className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-300">
                ✏️ Edit Profile
              </button>
            </div>
          </div>
        </div>



        {/* Right Side Blogs with Scroll */}
        <div className="w-full md:w-2/3">
          <h3 className="text-xl font-semibold mb-4">My Blogs</h3>

          {/* 👇 Fixed Height + Scroll Only in Blog Section */}
          <div className="h-[500px] overflow-y-scroll scroll-smooth pr-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {blogs.map((blog) => (
                <div key={blog.id} className="bg-white shadow-md rounded-xl overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h4 className="font-bold text-lg">{blog.title}</h4>
                    <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
                    <button className="mt-3 text-sm text-blue-600 hover:underline">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
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
            type="text"
            placeholder="Enter blog title"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block font-medium mb-1">Content</label>
          <textarea
            placeholder="Write your blog content..."
            rows="6"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">-- Select Category --</option>
            <option>Technology</option>
            <option>Travel</option>
            <option>Food</option>
            <option>Lifestyle</option>
            <option>Fashion</option>
            <option>Health</option>
            <option>Science</option>
            <option>Art</option>
            <option>Books</option>
            <option>Movies</option>
            <option>Music</option>
          </select>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-medium mb-1">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
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
