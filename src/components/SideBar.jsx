import React, { useState } from 'react';
import { Home, Search, Library, X } from 'lucide-react';

export const SideBar = ({ className, onClose }) => {
  return (
    <div
      className={`
        fixed lg:relative w-[370px] lg:w-[320px] xl:w-[400px] bg-black py-3 px-2 lg:py-0 lg:p-3 
        flex flex-col gap-2 md:gap-6 z-50
        transition-transform duration-300 ${className}
        h-full
        lg:translate-x-0
      `}
    >
      <div className="flex items-center gap-4 mt-1 mb-2 lg:mb-0 lg:mt-4 md:mt-0">
        <button
          onClick={onClose}
          className="p-2 rounded-full lg:hidden "
        >
          <X className="w-6 h-6" />
        </button>
        {/* <img src="/img/p3.jpeg" alt="Spotify" className="w-8 h-8" /> */}
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 20 20" version="1.1">
          <title>music [#ffffff]</title>
          <desc>Created with Sketch.</desc>
          <defs>

          </defs>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Dribbble-Light-Preview" transform="translate(-260.000000, -3759.000000)" fill="#ffffff">
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M224,3601.05129 L224,3610.55901 C224,3612.90979 222.17612,3614.95492 219.888035,3614.89646 C217.266519,3614.82877 215.248971,3612.1662 216.234285,3609.31593 C216.777356,3607.74464 218.297755,3606.71797 219.920978,3606.69233 C220.695653,3606.68105 220.976173,3606.88208 222.003416,3607.24105 L222.003416,3604.12822 C222.003416,3603.56207 221.556181,3603.10258 221.005124,3603.10258 L213.018786,3603.10258 C212.467729,3603.10258 212.020494,3603.56207 212.020494,3604.12822 L212.020494,3614.65851 C212.020494,3617.02057 210.179644,3619.07289 207.881575,3618.99801 C205.681339,3618.92622 203.914362,3617.02775 204.00321,3614.73031 C204.090061,3612.51594 205.989811,3610.84209 208.147121,3610.79081 C209.166377,3610.76619 209.352059,3610.92619 210.02391,3611.34363 L210.02391,3601.05129 C210.02391,3599.91795 210.91838,3599 212.020494,3599 L222.003416,3599 C223.106529,3599 224,3599.91795 224,3601.05129" id="music-[#1005]">

                </path>
              </g>
            </g>
          </g>
        </svg>
        <span className="text-xl font-bold">Musik</span>
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
  );
};