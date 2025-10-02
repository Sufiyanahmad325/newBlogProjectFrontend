// AllBlog.jsx
import React from "react";

const blogs = [
  {
    id: 1,
    title: "First Blog Post",
    description:
      "This is the first blog description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magni atque fugit, pariatur explicabo perspiciatis, doloremque sed qui cum, nam soluta reiciendis veniam.",
    image: "https://images.pexels.com/photos/33113960/pexels-photo-33113960.jpeg",
  },
  {
    id: 2,
    title: "Second Blog Post",
    description:
      "This is the second blog description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel asperiores, quos.",
    image: "https://images.pexels.com/photos/15286/pexels-photo.jpg",
  },
  {
    id: 3,
    title: "Third Blog Post",
    description:
      "This is the third blog description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima, distinctio voluptates sunt porro, ipsa aliquid nam magni explicabo excepturi molestiae.",
    image: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
  },
];

const AllBlog = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-10">
      <h1 className="text-3xl font-bold mb-6">All Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{blog.title}</h2>

              {/* Thoda zyada content (200 char tak) */}
              <p className="text-gray-600 mt-2 text-sm">
                {blog.description.length > 200
                  ? blog.description.slice(0, 200) + "..."
                  : blog.description}
              </p>

              {/* Buttons ek line me */}
              <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                  ❤️ Like
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlog;
