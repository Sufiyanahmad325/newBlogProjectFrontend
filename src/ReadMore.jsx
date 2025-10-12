import React from "react";

export default function ReadMore() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">
          About Our Blog
        </h2>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-12">
          Welcome to <span className="font-semibold text-white">BlogSphere</span> — a modern and interactive blogging platform
          where users can explore inspiring articles, share their thoughts, and connect with creative minds.
          Our goal is to make writing and reading blogs simple, enjoyable, and powerful for everyone.
        </p>

        {/* Info cards */}
        <div className="grid gap-6 md:grid-cols-3 mt-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Write Blogs</h3>
            <p className="text-gray-300">
              Create and publish your own blogs with an easy-to-use editor. Share your ideas with the world.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Read & Explore</h3>
            <p className="text-gray-300">
              Discover blogs from other creators and get inspired by their unique stories and experiences.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Connect</h3>
            <p className="text-gray-300">
              Like and comment on blogs you enjoy, and connect with people who share your interests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
