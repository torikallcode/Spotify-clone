import React from 'react';

function FilmCard({ film, onPlayClick }) {
  return (
    <div className="relative flex-shrink-0 w-64 cursor-pointer group">
      <img
        src={film.image}
        alt={film.title}
        className="object-cover w-full transition-transform rounded-md h-96 group-hover:scale-105"
      />
      {film.hasBirthdayMessage && (
        <button
          onClick={onPlayClick}
          className="absolute flex items-center p-4 text-white transition-opacity transform -translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full opacity-0 top-1/2 left-1/2 group-hover:opacity-100"
        >
          ▶
        </button>
      )}
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{film.title}</h3>
      </div>
    </div>
  );
}

export default FilmCard;