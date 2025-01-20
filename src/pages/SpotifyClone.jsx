import React, { useState } from 'react';
import { Play, Pause, Home, Search, MoreHorizontal, Menu, X } from 'lucide-react';
import { Library, Heart, Plus, ChevronLeft, ChevronRight, Check, Clock, Volume2, LayoutList, Mic2, Monitor, Volume1, Maximize2, } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';


const SpotifyClone = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const birthdayLyrics = [
    "🎵 Di hari yang spesial ini...",
    "🎂 Ku ucapkan selamat ulang tahun...",
    "✨ Semoga semua impianmu terwujud...",
    "💝 Dan selalu bahagia bersamaku...",
    "🌟 Aku sayang kamu...",
  ];

  const popularSongs = [
    {
      id: 1,
      title: "Satu Bulan",
      plays: "278,438,715",
      duration: "3:20",
      image: "/img/p3.jpeg",
      albumName: "Satu Bulan - Single"
    },
    {
      id: 2,
      title: "Untungnya, Hidup Harus Tetap Berjalan",
      plays: "172,498,258",
      duration: "3:02",
      image: "/img/p3.jpeg",
      albumName: "Life Album"
    },
    {
      id: 3,
      title: "Kata Mereka Ini Berlebihan",
      plays: "191,332,932",
      duration: "3:11",
      image: "/img/p3.jpeg",
      albumName: "Latest Singles"
    },
    {
      id: 4,
      title: "Kata Mereka Ini Berlebihan",
      plays: "191,332,932",
      duration: "3:11",
      image: "/img/p3.jpeg",
      albumName: "Latest Singles"
    },
    {
      id: 5,
      title: "Kata Mereka Ini Berlebihan",
      plays: "191,332,932",
      duration: "3:11",
      image: "/img/p3.jpeg",
      albumName: "Latest Singles"
    },
    {
      id: 6,
      title: "Kata Mereka Ini Berlebihan",
      plays: "191,332,932",
      duration: "3:11",
      image: "/img/p3.jpeg",
      albumName: "Latest Singles"
    },
    {
      id: 7,
      title: "Kata Mereka Ini Berlebihan",
      plays: "191,332,932",
      duration: "3:11",
      image: "/img/p3.jpeg",
      albumName: "Latest Singles"
    },
    {
      id: 8,
      title: "Kata Mereka Ini Berlebihan",
      plays: "191,332,932",
      duration: "3:11",
      image: "/img/p3.jpeg",
      albumName: "Latest Singles"
    },
    {
      id: 9,
      title: "Kata Mereka Ini Berlebihan",
      plays: "191,332,932",
      duration: "3:11",
      image: "/img/p3.jpeg",
      albumName: "Latest Singles"
    },
    {
      id: 10,
      title: "Kata Mereka Ini Berlebihan",
      plays: "191,332,932",
      duration: "3:11",
      image: "/img/p3.jpeg",
      albumName: "Latest Singles"
    },
  ];

  React.useEffect(() => {
    let interval;
    if (showModal && isPlaying) {
      interval = setInterval(() => {
        setCurrentLyricIndex((prev) =>
          prev === birthdayLyrics.length - 1 ? 0 : prev + 1
        );
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [showModal, isPlaying]);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
    setShowModal(true);
  };

  return (
    <div className="flex flex-col h-screen text-white bg-black md:flex-row">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed z-50 p-2 bg-black rounded-full md:hidden top-4 left-4"
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed md:relative w-[370px] bg-black p-6 flex flex-col gap-6 z-50
        transition-transform duration-300
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 h-full
      `}>
        <div className="flex items-center gap-2 mt-8 md:mt-0">
          <img src="/img/p3.jpeg" alt="Spotify" className="w-8 h-8" />
          <span className="text-xl font-bold">Spotify</span>
        </div>

        {/* <div className="flex items-center justify-between mb-2">
          <img
            src="/api/placeholder/130/40"
            alt="Spotify"
            className="w-32 p-4"
          />
          <button
            // onClick={toggleMobileMenu}
            className="p-2 rounded-full lg:hidden hover:bg-gray-800"
          >
            <X className="w-6 h-6" />
          </button>
        </div> */}

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

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#121212]/95 backdrop-blur-sm z-40">
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
              <button className="px-4 py-2 text-gray-300 hover:text-white sm:block">Sign up</button>
              <button className="px-8 py-2 font-bold text-black bg-white rounded-full hover:scale-105">Log in</button>
            </div>
          </div>
        </div>

        {/* Artist Section */}
        <div className="relative overflow-hidden md:rounded-lg">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black" />
          <img
            src="/img/spotify.png"
            alt="Artist Cover"
            className="w-full h-[200px] sm:h-[250px] md:h-[350px] object-cover object-top"
          />
          <div className="absolute z-20 bottom-4 sm:bottom-8 left-4 sm:left-8">
            <div className="bg-[#0C67D3] text-xs px-2 py-1 rounded-full inline-flex items-center gap-1">
              <Check className="w-3 h-3" />
              <span>Verified Artist</span>
            </div>

            <h1 className="mb-2 text-4xl font-bold sm:text-6xl md:text-8xl sm:mb-6">Bernadya</h1>
            <p className="text-sm text-gray-300 sm:text-base">12,440,483 monthly listeners</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="px-4 py-4 sm:px-8 sm:py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={handlePlayClick}
              className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#1DB954] rounded-full hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Play className="w-5 h-5 ml-1 sm:w-6 sm:h-6" />
              )}
            </button>
            <Heart className="w-6 h-6 text-gray-300 cursor-pointer sm:w-8 sm:h-8 hover:text-white" />
            <MoreHorizontal className="w-6 h-6 text-gray-300 cursor-pointer sm:w-8 sm:h-8 hover:text-white" />
          </div>

          {/* Popular Section */}
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

      {/* Birthday Message Modal */}
      <Dialog.Root open={showModal} onOpenChange={setShowModal}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 animate-fade-in z-[9999]" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg p-4 sm:p-6 text-white shadow-xl animate-scale-in mx-4">
            <Dialog.Title className="mb-4 text-xl text-center sm:text-2xl">
              Happy Birthday! 🎉
            </Dialog.Title>
            <div className="py-6 sm:py-8">
              <p className="text-lg font-medium text-center sm:text-xl animate-fade-in">
                {birthdayLyrics[currentLyricIndex]}
              </p>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default SpotifyClone;