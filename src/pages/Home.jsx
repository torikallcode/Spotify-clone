import React, { useState } from 'react';
import FilmCard from '../components/FilmCard';
import filmData from '../data/filmData';
import '../index.css';
import BirthdayModal from '../components/BirthDayModal';

function Home() {
  const [selectedFilm, setSelectedFilm] = useState(null);

  const handlePlayClick = (film) => {
    if (film.hasBirthdayMessage) {
      setSelectedFilm(film);
    }
  };

  const closeBirthdayModal = () => {
    setSelectedFilm(null);
  };

  // Ambil film pertama sebagai hero
  const heroFilm = filmData[0];
  const otherFilms = filmData.slice(1);

  return (
    <div className="min-h-screen text-white bg-black">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 to-transparent"></div>
        <img
          src={heroFilm.image}
          alt={heroFilm.title}
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="relative z-20 flex flex-col justify-center h-full px-12">
          <h1 className="mb-4 text-5xl font-bold text-white">{heroFilm.title}</h1>
          <p className="max-w-2xl mb-6 text-xl">
            Kenangan terindah, momen spesial yang tak terlupakan.
            Setiap foto adalah cerita cinta yang tak ternilai.
          </p>
          {heroFilm.hasBirthdayMessage && (
            <button
              onClick={() => handlePlayClick(heroFilm)}
              className="px-8 py-3 text-lg text-white transition-colors bg-red-600 rounded-md hover:bg-red-700 w-max"
            >
              ▶ Lihat Pesan Spesial
            </button>
          )}
        </div>
      </div>

      {/* Film Gallery Section */}
      <div className="px-12 mt-8">
        <h2 className="mb-4 text-2xl font-bold">Kenangan Kita</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {otherFilms.map(film => (
            <FilmCard
              key={film.id}
              film={film}
              onPlayClick={() => handlePlayClick(film)}
            />
          ))}
        </div>
      </div>

      {/* Birthday Modal */}
      {selectedFilm && (
        // <BirthdayModal
        //   film={selectedFilm}
        //   onClose={closeBirthdayModal}
        // />
        <BirthdayModal
          film={selectedFilm}
          onClose={closeBirthdayModal}
        />
      )}
    </div>
  );
}

export default Home;