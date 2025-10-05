import React, { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Designing with Simplicity",
    author: "Sufiyan Ahmad",
    description:
      "Learn how simplicity can elevate your UI/UX design and create better user experiences for your audience.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
  },
  {
    id: 2,
    title: "Exploring React Hooks",
    author: "Sahil Ali",
    description:
      "React Hooks are powerful features that simplify component logic. Let’s understand useState and useEffect together.",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
  },
  {
    id: 3,
    title: "The Power of Clean Code",
    author: "Aisha Khan",
    description:
      "Clean code isn’t just about looks — it’s about efficiency, readability, and maintainability in every project.",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
  },
];

const AllBlog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        📝 Explore Inspiring Blogs
      </h1>

      {/* Search Box */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="🔍 Search a Single User..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 border border-gray-300 bg-white shadow-sm rounded-full px-5 py-3 text-center text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        />
      </div>

      {/* Blog Cards */}
      {filteredBlogs.length > 0 ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-3"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3">✍️ {blog.author}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {blog.description.length > 120
                    ? blog.description.slice(0, 120) + "..."
                    : blog.description}
                </p>
                <div className="mt-5 flex justify-between">
                  <button className="px-4 py-2 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all">
                    Read More
                  </button>
                  <button className="px-4 py-2 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition-all">
                    ❤️ Like
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No blogs found for “{searchTerm}”
        </p>
      )}
    </div>
  );
};

export default AllBlog;
