// FeaturedSection.jsx
import React from "react";

const TwoBigCardBelowHader = () => {
    return (
        <div className="max-w-9xl mx-auto px-16 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Left Card */}
                <div className="bg-gray-100 rounded-xl shadow-md h-[350px]  flex flex-col justify-center relative   overflow-hidden">
                    <img src="https://images.pexels.com/photos/6090202/pexels-photo-6090202.jpeg" alt=""
                        className="absolute"
                    />
                    <div className=" z-10  p-6 ">
                        <h3 className="text-sm text-white">Featured Post</h3>
                        <h2 className="text-3xl font-bold mt-2 text-white">Featured Post</h2>
                        <p className="text-white ">
                            This is a sample description text for the featured post section.
                        </p>
                        <button className="mt-4 px-5 py-2 bg-white text-black  rounded-md w-fit hover:bg-gray-800">
                            READ MORE
                        </button>
                    </div>
                </div>

                {/* Right Card (with only image background) */}
                <div className="rounded-xl shadow-md h-[350px] overflow-hidden">
                    <img
                        src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg"
                        alt="Right Card"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
        </div>
    );
};

export default TwoBigCardBelowHader;
