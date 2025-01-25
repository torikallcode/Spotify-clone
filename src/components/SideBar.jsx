import React from 'react'
import { Play, Pause, Home, Search, MoreHorizontal, Menu, X } from 'lucide-react';
import { Library, Heart, Plus, ChevronLeft, ChevronRight, Check, Clock, Volume2, LayoutList, Mic2, Monitor, Volume1, Maximize2, } from 'lucide-react';
import { useState } from 'react'

export const SideBar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`
      fixed md:relative w-[370px] lg:w-[400px] bg-black py-3 px-2 lg:py-0 lg:p-3 flex flex-col gap-2 md:gap-6 z-50
      transition-transform duration-300
      ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      md:translate-x-0 h-full
    `}>
      <div className="flex items-center gap-2 mt-1 mb-2 lg:mb-0 lg:mt-4 md:mt-0">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-full lg:hidden hover:bg-gray-800"
        >
          <X className="w-6 h-6" />
        </button>
        <img src="/img/p3.jpeg" alt="Spotify" className="w-8 h-8" />
        <span className="text-xl font-bold">Spotify</span>
      </div>

      {/* Main Navigation */}
      <div className="bg-[#121212] rounded-lg p-2 lg:mb-2">
        <button className="flex items-center w-full gap-4 p-3 text-gray-300 transition-colors rounded-lg hover:text-white hover:bg-[#1a1a1a]">
          <Home className="w-6 h-6" />
          <span className="font-bold">Home</span>
        </button>
        <button className="flex items-center w-full gap-4 p-3 text-gray-300 transition-colors rounded-lg hover:text-white hover:bg-[#1a1a1a]">
          <Search className="w-6 h-6" />
          <span className="font-bold">Search</span>
        </button>
      </div>

      {/* Library Section - Scrollable on mobile */}
      <div className="bg-[#121212] rounded-lg flex-1 p-2 h-[calc(100vh-180px)] overflow-y-auto">
        <div className="flex items-center justify-between p-3">
          <button className="flex items-center gap-2 text-gray-300 transition-colors hover:text-white">
            <Library className="w-6 h-6" />
            <span className="font-bold">Your Library</span>
          </button>
          <button className="p-2 text-gray-300 hover:text-white hover:bg-[#1a1a1a] rounded-full transition-all">
            {/* <Plus className="w-5 h-5" /> */}
          </button>
        </div>

        <div className="bg-[#242424] rounded-lg p-4 mt-4 space-y-4">
          <p className="font-bold">Create your first playlist</p>
          <p className="text-sm text-gray-300">It's easy, we'll help you</p>
          <button className="px-4 py-2 text-sm font-bold text-black transition-transform bg-white rounded-full hover:scale-105">
            Create playlist
          </button>
        </div>

        <div className="bg-[#242424] rounded-lg p-4 mt-4 space-y-4">
          <p className="font-bold">Let's find some podcasts to follow</p>
          <p className="text-sm text-gray-300">We'll keep you updated on new episodes</p>
          <button className="px-4 py-2 text-sm font-bold text-black transition-transform bg-white rounded-full hover:scale-105">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  )
}
