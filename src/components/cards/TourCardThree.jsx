import React from 'react'

export default function TourCardThree(props) {
  return (
    <div className="bg-white rounded-md md:w-[180px] w-[160px]">
    <img
      src={props.image}
      alt="City"
      className="w-full md:h-48 h-44 object-cover rounded-md"
    />
    <div className="py-3">
      <h3 className="text-sm font-semibold">City Name</h3>
      <p className="text-xs text-gray-500">Country</p>
    </div>
  </div>
  )
}
