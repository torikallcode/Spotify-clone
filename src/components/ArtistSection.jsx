import React from "react";
import { Check } from 'lucide-react';


export const ArtistSection = () => {
  return (
    <div className="relative overflow-hidden md:rounded-lg font-poppins">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black" />
      <img
        src="/img/pic3.jpg"
        alt="Artist Cover"
        className="w-full h-[400px] sm:h-[350px] object-cover object-right"
      />
      <div className="absolute z-20 bottom-4 sm:bottom-8 left-4 sm:left-8">
        <div className="bg-[#0C67D3] text-xs px-2 py-1 rounded-full inline-flex items-center gap-1">
          <Check className="w-3 h-3" />
          <h1>Verified Artist</h1>
        </div>

        <h1 className="mb-2 text-4xl font-bold sm:text-6xl md:text-8xl sm:mb-6">Lala</h1>
        <p className="text-sm font-medium text-gray-300 sm:text-base">12,440,483 monthly listeners</p>
      </div>
    </div>
  )
}