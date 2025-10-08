// BlogCards.jsx
import React, { use, useContext, useEffect, useState } from "react";
import { BlogContext } from "../App";

const BlogCards = () => {
  const { userAllBlog} = useContext(BlogContext)

  
 


  return (
    <div className="container mx-auto px-16 mt-8">
      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {userAllBlog?.map((blog, i) => (
          <div
            key={i}
            className="rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition"
          >
            <img
              src={`https://picsum.photos/200/200?random=${i}`}
              alt="Blog"
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">{blog.title || 'title Not Availble' }</h3>
            <p className="text-sm text-gray-500 mt-1">
               Date • {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-600 text-sm mt-2">
              {blog.content || 'content Not Availble' }
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-100">
          View All Blogs
        </button>
      </div>
    </div>
  );
};

export default BlogCards;
