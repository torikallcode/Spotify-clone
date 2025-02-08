import React from "react";
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';


export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 bg-black backdrop-blur-sm font-poppins">
      <div className="flex flex-col px-4 py-4 lg:gap-4 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center justify-between flex-1 gap-4">
          <div className="hidden gap-2 lg:flex">
            <button className="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-black/60 hover:bg-black/40">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-black/60 hover:bg-black/40">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          {/* Search - Full width on mobile */}
          <div className="relative flex-1 w-full hidden lg:block max-w-[364px] md:w-auto">
            <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <input
              type="text"
              placeholder="What do you want to play?"
              className="w-full bg-[#242424] rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-white text-sm"
            />
          </div>
        </div>
        {/* Auth buttons - Stack on mobile */}
        <div className="flex gap-2 ml-auto">
          <button className="px-4 py-2 font-semibold text-gray-300 hover:text-white sm:block">Sign up</button>
          <button className="px-8 py-2 font-bold text-black bg-white rounded-full hover:scale-105">Log in</button>
        </div>
      </div>
    </nav>
  )
}