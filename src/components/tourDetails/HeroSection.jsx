import React from "react";
import hero_img_1 from '../../assets/media/hero_img_1.jpg'
import hero_img_2 from '../../assets/media/hero_img_2.jpg'
import hero_img_3 from '../../assets/media/hero_img_3.jpg'
import hero_img_4 from '../../assets/media/hero_img_4.jpg'
import hero_img_5 from '../../assets/media/hero_img_5.jpg'

export const HeroSection = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="md:text-sm text-xs text-gray-500 mb-4">
          <ol className="list-none p-0 flex flex-wrap">
            <li>
              <a href="#" className="hover:text-blue-500">Home</a>
            </li>
            <li className="px-2">/</li>
            <li>
              <a href="#" className="hover:text-blue-500">Cappadocia</a>
            </li>
            <li className="px-2">/</li>
            <li>
              <a href="#" className="hover:text-blue-500">Aerial Sightseeing</a>
            </li>
            <li className="px-2">/</li>
            <li>
              <a href="#" className="hover:text-blue-500">Hot Air Balloon</a>
            </li>
            <li className="px-2">/</li>
            <li className="text-gray-700 md:text-sm text-xs">Goreme Valley Cappadocia</li>
          </ol>
        </nav>

        {/* Title Section */}
        <div className="mb-4">
          <h3 className="md:text-sm text-xs uppercase text-gray-600 font-semibold">
            Hot Air Balloon
            <span className="ml-2 text-pink-500">
              • 4.6{" "}
              <a href="#" className="text-pink-500 underline">(435 ratings)</a>
            </span>
          </h3>
          <h1 className="md:text-3xl text-xl md:font-semibold font-medium text-gray-800 mt-4">
            Cappadocia Goreme Sunrise Hot Air Balloon Tour with Breakfast & Transfers
          </h1>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          
          <div className="relative overflow-hidden rounded-l-2xl rounded-r-none">
            <img
              src={hero_img_1}
              alt="Hot Air Balloon"
              className="w-full h-[400px] object-cover rounded-l-2xl rounded-r-none"
            />
            {/* Play Button */}
            <button className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.75 5.75A.75.75 0 0 1 7.97 5l6.54 3.75a.75.75 0 0 1 0 1.3L7.97 13.8a.75.75 0 0 1-1.22-.65V6.4a.75.75 0 0 1 1.22-.65Z" />
              </svg>
            </button>
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-2 gap-3">
            <img
              src={hero_img_2}
              alt="Thumbnail 1"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <img
              src={hero_img_3}
              alt="Thumbnail 2"
              className="w-full h-full object-cover rounded-lg shadow-md rounded-r-2xl rounded-l-none"
            />
            <img
              src={hero_img_4}
              alt="Thumbnail 3"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <div className="relative">
              <img
                src={hero_img_5}
                alt="Thumbnail 4"
                className="w-full h-full object-cover rounded-lg shadow-md rounded-r-2xl rounded-l-none"
              />
              {/* View All Images */}
              <button className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-sm rounded-lg hover:bg-opacity-70 transition rounded-r-2xl rounded-l-none">
                View all images
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
