import React, { useState } from 'react';
import { Search, Home, Library, Plus, MoreHorizontal, Play, ChevronLeft, ChevronRight, Check, Clock, Volume2, LayoutList, Mic2, Monitor, Volume1, Maximize2, Menu, X } from 'lucide-react';

const SpotifyClone2 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFullHeader, setShowFullHeader] = useState(false);

  const popularSongs = [
    {
      id: 1,
      title: "Satu Bulan",
      plays: "278,438,715",
      duration: "3:20",
      image: "/api/placeholder/40/40",
      albumName: "Satu Bulan - Single"
    },
    {
      id: 2,
      title: "Untungnya, Hidup Harus Tetap Berjalan",
      plays: "172,498,258",
      duration: "3:02",
      image: "/api/placeholder/40/40",
      albumName: "Life Album"
    },
    {
      id: 3,
      title: "Kata Mereka Ini Berlebihan",
      plays: "191,332,932",
      duration: "3:11",
      image: "/api/placeholder/40/40",
      albumName: "Latest Singles"
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen text-white bg-black">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="fixed z-50 p-2 transition-all duration-300 bg-black rounded-full lg:hidden top-4 right-4 hover:bg-gray-800"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Left Sidebar - Responsive */}
      <div
        className={`fixed left-0 top-0 h-screen bg-yellow-500 transition-all duration-300 z-40
          ${isMobileMenuOpen ? 'w-full md:w-72' : 'w-0 lg:w-64'} 
          lg:translate-x-0 
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto
          p-2`}
      >
        <div className="flex items-center justify-between mb-2">
          <img
            src="/api/placeholder/130/40"
            alt="Spotify"
            className="w-32 p-4"
          />
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-full lg:hidden hover:bg-gray-800"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Navigation */}
        <div className="bg-[#121212] rounded-lg p-2 mb-2">
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
              <Plus className="w-5 h-5" />
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

      {/* Main Content - Responsive */}
      <div className={`transition-all duration-300 
        ${isMobileMenuOpen ? 'lg:ml-64' : 'ml-0 lg:ml-64'} flex-1`}>
        {/* Top Navigation */}
        <div className="sticky top-0 bg-[#121212]/95 backdrop-blur-sm z-10">
          <div className="flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between lg:px-8">
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
              <div className="relative flex-1 w-full max-w-[364px] md:w-auto">
                <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="text"
                  placeholder="What do you want to play?"
                  className="w-full bg-[#242424] rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-white text-sm"
                />
              </div>
            </div>
            {/* Auth buttons - Stack on mobile */}
            <div className="flex flex-col w-full gap-2 mt-4 md:flex-row md:w-auto md:mt-0 md:gap-4">
              <button className="w-full px-4 py-2 text-sm font-bold text-black transition-transform bg-white rounded-full md:w-auto lg:px-8 lg:py-3 hover:scale-105 lg:text-base">
                Sign up
              </button>
              <button className="w-full px-4 py-2 text-sm font-bold transition-all bg-black border border-gray-500 rounded-full md:w-auto lg:px-8 lg:py-3 hover:scale-105 hover:border-white lg:text-base">
                Log in
              </button>
            </div>
          </div>
        </div>

        {/* Artist Header - Responsive */}
        <div className="bg-gradient-to-b from-[#4a2a2a] to-[#121212] px-4 lg:px-8 pt-6 pb-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end">
            <img
              src="/api/placeholder/232/232"
              alt="Bernadya"
              className="w-40 h-40 mx-auto rounded shadow-2xl md:mx-0 md:w-48 md:h-48 lg:w-56 lg:h-56"
            />
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center gap-2 mb-2 md:justify-start">
                <div className="bg-[#0C67D3] text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>Verified Artist</span>
                </div>
              </div>
              <h1 className="mb-6 text-3xl font-black md:text-4xl lg:text-8xl">Bernadya</h1>
              <p className="text-sm lg:text-base text-white/80">12,335,516 monthly listeners</p>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="px-4 lg:px-8 py-6 bg-gradient-to-b from-[#121212]/40 to-[#121212]">
          {/* Player Controls */}
          <div className="flex items-center justify-center gap-8 mb-8 md:justify-start">
            <button
              className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#1ed760] flex items-center justify-center hover:scale-105 transition-transform group"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <Play className="w-6 h-6 text-black lg:w-7 lg:h-7 fill-black group-hover:scale-105" />
            </button>
            <button className="text-gray-400 hover:text-white p-2 hover:bg-[#1a1a1a] rounded-full transition-all">
              <MoreHorizontal className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>
          </div>

          {/* Popular Section - Responsive */}
          <section>
            <h2 className="mb-4 text-xl font-bold lg:text-2xl">Popular</h2>
            <div className="flex flex-col">
              {/* Header - Hidden on mobile */}
              <div className="hidden md:grid grid-cols-[16px_4fr_2fr_minmax(120px,1fr)] gap-4 px-4 text-sm text-gray-400 border-b border-white/10 pb-2">
                <span>#</span>
                <span>Title</span>
                <span>Plays</span>
                <div className="flex justify-end">
                  <Clock className="w-5 h-5" />
                </div>
              </div>

              {/* Songs - Responsive grid */}
              {popularSongs.map((song, index) => (
                <div
                  key={song.id}
                  className="grid grid-cols-[auto_1fr] md:grid-cols-[16px_4fr_2fr_minmax(120px,1fr)] gap-4 p-4 text-gray-300 hover:bg-white/10 rounded-md group items-center"
                >
                  <span className="hidden text-base md:block">{index + 1}</span>
                  <div className="flex items-center col-span-2 gap-4 md:col-span-1">
                    <img src={song.image} alt="" className="flex-shrink-0 w-10 h-10" />
                    <div className="flex flex-col min-w-0">
                      <span className="font-normal text-white truncate">{song.title}</span>
                      <span className="text-sm text-gray-400 truncate">{song.albumName}</span>
                    </div>
                  </div>
                  <span className="hidden md:block">{song.plays}</span>
                  <span className="hidden text-right md:block">{song.duration}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SpotifyClone2;