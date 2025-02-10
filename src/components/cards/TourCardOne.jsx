import React from "react";
import { FaStar, FaBolt } from "react-icons/fa"; // Importing icons

const TourCardOne = (props) => {

  return (
    <div className="max-w-xs rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img
          src={props.image} // Replace with your actual image URL
          alt="Cappadocia ATV Tour"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <span className="absolute top-2 left-2 bg-white text-xs font-medium px-2 py-1 rounded-md shadow-md">
          Free cancellation
        </span>
      </div>

      {/* Card Content */}
      <div className="py-4">
        {/* Category */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">Quad Biking</p>
          {/* Rating */}
          <div className="flex justify-center items-center text-xs text-pink-600 font-medium mt-1">
            <FaStar className="text-pink-600 mr-1 mb-0.5" />
            <span>4.6</span> <span className="text-gray-500 ml-1">(135)</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-gray-900 mt-1">
          Cappadocia ATV Tour with Transfers
        </h3>

        {/* Instant Confirmation */}
        <div className="flex items-center text-xs text-gray-700 mt-2">
          <FaBolt className="text-gray-600 mr-1" />
          Instant confirmation
        </div>

        {/* Price */}
        <p className="text-md font-semibold text-gray-800 mt-2">₹2,612</p>
      </div>
    </div>
  );
};

export default TourCardOne;
