import React from "react";

export default function TourCardTwo(props) {
  return (
    <div className="bg-white rounded-lg w-[200px]">
      <img
        src={props.image}
        alt="Thing to do"
        className="w-full h-[220px] object-cover rounded-md"
      />
      <div className="py-4">
        <h3 className="text-sm font-semibold">Thing to Do Title</h3>
        <p className="text-sm text-gray-500">from ₹3,168</p>
      </div>
    </div>
  );
}
