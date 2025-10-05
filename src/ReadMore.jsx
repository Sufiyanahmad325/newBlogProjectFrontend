export default function ReadMore() {
    return (
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white shadow-lg rounded-xl p-6">
          {/* Left Side - Image */}
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="featured"
            className="w-full h-64 object-cover rounded-lg"
          />
  
          {/* Right Side - Content */}
          <div>
            <p className="text-sm uppercase text-gray-500 font-medium mb-2">
              Featured Post
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Discover the Beauty of the Ocean
            </h2>
            <p className="text-gray-600 mb-5">
              Dive deep into the mysteries of marine life and explore the world beneath the waves.
            </p>
  
            {/* Read More Button */}
            <button
              className="px-6 py-2 border border-gray-800 rounded-lg text-gray-800 font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
                Read More
            </button>
          </div>
        </div>
      </section>
    );
  }
  