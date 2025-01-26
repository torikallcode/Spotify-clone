import React, { useState } from 'react';
import { Play, Pause, MoreHorizontal, Menu, X } from 'lucide-react';
import { Heart, Clock } from 'lucide-react';
import Featuring from '../components/Featuring';
import { SideBar } from '../components/SideBar';
import { ArtistSection } from '../components/ArtistSection';
import { PopularSection } from '../components/PopularSection';
import { Navbar } from '../components/Navbar';
import { BirthdayModal } from '../components/BirthDayModal';
import { About } from '../components/About';
import Footer from '../components/Footer';

const SpotifyClone = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const birthdayLyrics = [
    "Hai Karina...",
    "Di hari yang spesial ini Ku ucapkan selamat ulang tahunSemoga semua impianmu terwujudDan selalu bahagia bersamakuAku sayang kamu...",
    "With All My Love",
  ];

  const popularSongs = [
    {
      id: 1,
      title: "Satu Bulan",
      plays: "278,438,715",
      duration: "3:20",
      image: "/img/ls1.jpeg",
      albumName: "Satu Bulan - Single"
    },
    {
      id: 2,
      title: "Untungnya, Hidup Harus Tetap Berjalan",
      plays: "172,498,258",
      duration: "3:02",
      image: "/img/ls2.jpeg",
      albumName: "Life Album"
    },
    {
      id: 3,
      title: "Kata Mereka Ini Berlebihan",
      plays: "191,332,932",
      duration: "3:11",
      image: "/img/ls3.jpeg",
      albumName: "Latest Singles"
    },
    {
      id: 4,
      title: "Kata Mereka Ini Berlebihan",
      plays: "191,332,932",
      duration: "3:11",
      image: "/img/ls4.jpeg",
      albumName: "Latest Singles"
    },
    {
      id: 5,
      title: "Kata Mereka Ini Berlebihan",
      plays: "191,332,932",
      duration: "3:11",
      image: "/img/ls5.jpeg",
      albumName: "Latest Singles"
    },
  ];

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsPlaying(!isPlaying);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col h-screen text-white bg-black lg:flex-row">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed z-50 p-2 rounded-full md:hidden top-4 left-3"
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>
      <SideBar
        className={isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        onClose={handleCloseMobileMenu}
      />
      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-[#121212]">
        <Navbar />
        <ArtistSection />
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
            <h2 className="mt-4 text-base font-bold lg:mt-0 lg:text-2xl">Popular</h2>
            <div className="flex flex-col">
              {/* <div className="hidden md:grid grid-cols-[16px_4fr_2fr_minmax(120px,1fr)] gap-4 px-4 text-sm text-gray-400 border-b border-white/10 pb-2">
                <span>#</span>
                <span>Title</span>
                <span>Plays</span>
                <div className="flex justify-end">
                  <Clock className="w-5 h-5" />
                </div>
              </div> */}
              {popularSongs.map((song, index) => (
                <PopularSection
                  key={song.id}
                  id={song.id}
                  index={index + 1}
                  image={song.image}
                  title={song.title}
                  albumName={song.albumName}
                  plays={song.plays}
                  duration={song.duration}
                />
              ))
              }
            </div>
          </section>
        </div>
        <div className='flex flex-col px-4'>
          <Featuring />
          <About />
          <Footer />
        </div>
        <BirthdayModal
          isOpen={showModal}
          onClose={handleCloseModal}
          lyrics={birthdayLyrics}
        />
      </div>
    </div>
  );
};

export default SpotifyClone;