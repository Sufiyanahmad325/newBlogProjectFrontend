// BlogDetails.jsx
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../App";

export default function BlogDetails() {
    const { id } = useParams();
    const { allBlogPost, LikeBlog ,userDetails } = useContext(BlogContext);
    const [blog, setBlog] = useState(null);

    
    useEffect(() => {
        if (allBlogPost && id) {
          const updatedBlog = allBlogPost.find((b) => b._id === id);
          setBlog(updatedBlog || null);
        }
      }, [id, allBlogPost]);
      




    // ✅ Like toggle handler

    const handleLike = async () => {
        try {
            await LikeBlog(blog._id);

        } catch (error) {
            console.log(error)

        }
    };



    if (!blog) {
        return (
            <div className="text-center mt-20 text-gray-600 text-lg">
                Blog not found 😕
            </div>
        );
    }



    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <img
                src={blog.blogImage || ` https://picsum.photos/800/300?random=${id}`}
                alt="Blog Cover"
                className="w-full h-60 object-cover rounded-xl mb-6"
            />
            <h1 className="text-3xl font-bold mb-2">{blog?.title}</h1>
            <p className="text-gray-500 mb-4">
            {blog.createdAt?.slice(0, 10)} • By{" "}
                {blog.authorName || "Unknown"}
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {blog.content}
            </p>

            {/* ❤️ Like Button */}
            <div className="flex items-center gap-3">
                <button
                    onClick={handleLike}
                    className={`px-4 py-2 rounded-lg border transition ${blog?.likes?.includes(userDetails?._id)
                        ? "bg-red-500 text-white border-red-500"
                        : "bg-white text-gray-700 border-gray-400 hover:bg-gray-100"
                        }`}
                >
                    {blog.likes.includes(userDetails?._id) ? "❤️ Liked" : "🤍 Like"}
                </button>
                <span className="text-gray-600 text-lg">{blog?.likes?.length} Likes</span>
            </div>
        </div>
    );
}
