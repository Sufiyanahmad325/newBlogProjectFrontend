// BlogCategories.jsx
import React, { useState } from "react";

const categories = [
  "Technology",
  "Travel",
  "Food",
  "Lifestyle",
  "Fashion",
  "Health",
  "Science",
  "Art",
  "Books",
  "Movies",
  "Music",
];

const blogs = {
  Technology: [
    {
      id: 1,
      title: "Travel",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
      date: "May 2019",
    },
    {
      id: 2,
      title: "Tostion",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      date: "May 2012",
    },
    {
      id: 3,
      title: "Craule",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      date: "May 2019",
    },
    {
      id: 4,
      title: "Mel Tam",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      date: "May 2017",
    },
    {
      id: 5,
      title: "Tahe Hone",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      date: "May 2018",
    },
    {
      id: 6,
      title: "Mally Hies",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      date: "May 2017",
    },
    {
      id: 7,
      title: "Beknes",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      date: "May 2017",
    },
    {
      id: 8,
      title: "Ahetton",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      date: "May 2018",
    },
  ],
  Travel: [
    {
      id: 1,
      title: "Beach Vibes",
      description: "Explore the most beautiful beaches in the world.",
      image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
      date: "July 2020",
    },
  ],
};

const BlogCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("Technology");

  return (
    <div className="flex max-w-7xl mx-auto mt-10 gap-6">
      {/* Left Sidebar */}
      <div className="w-40 md:w-64  bg-white rounded-xl shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li
              key={cat}
              className={`cursor-pointer px-3 py-2 rounded-md ${
                selectedCategory === cat
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Blog Grid */}
      <div className="flex-1 ">
        <h1 className="text-3xl font-bold mb-6">{selectedCategory}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs[selectedCategory]?.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{blog.title}</h2>
                <p className="text-gray-600 text-sm mt-2">
                  {blog.description.length > 80
                    ? blog.description.slice(0, 80) + "..."
                    : blog.description}
                </p>
                <p className="text-xs text-gray-400 mt-2">{blog.date}</p>
              </div>
            </div>
          )) || (
            <p className="text-gray-500">No blogs available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCategories;
