import React from "react";

export const PopularSection = ({ id, index, image, title, albumName, plays, duration }) => {
  return (
    <div
      key={id}
      className="grid font-poppins grid-cols-[auto_1fr] md:grid-cols-[16px_4fr_2fr_minmax(120px,1fr)] gap-4 px-2 py-2 text-gray-300 hover:bg-white/10 rounded-md group items-center"
    >
      <span className="hidden text-base md:block">{index}</span>
      <div className="flex items-center col-span-2 gap-4 md:col-span-1">
        <img src={image} alt="" className="flex-shrink-0 w-11 object-cover object-center aspect-[1/1]" />
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-medium text-white truncate">{title}</span>
          <span className="text-sm text-gray-400 truncate">{albumName}</span>
        </div>
      </div>
      <span className="hidden text-sm md:block">{plays}</span>
      <span className="hidden text-sm text-right md:block">{duration}</span>
    </div>
  )
}