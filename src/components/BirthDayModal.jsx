import React from 'react';

function BirthdayModal({ film, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative w-full max-w-2xl p-8 bg-gray-900 rounded-lg">
        <button
          onClick={onClose}
          className="absolute text-white top-4 right-4 hover:text-gray-300"
        >
          ✕
        </button>

        <div className="flex flex-col items-center">
          <img
            src={film.image}
            alt={film.title}
            className="object-cover w-64 h-64 mb-6 rounded-full"
          />

          <h2 className="mb-4 text-3xl font-bold text-red-600">
            Selamat Ulang Tahun Sayang!
          </h2>

          <p className="mb-6 text-xl text-center">
            Aku ingin mengucapkan selamat ulang tahun kepada orang tercinta.
            Kamu adalah cahaya dalam hidupku, sumber kebahagiaan dan inspirasiku.
            Semoga di tahun ini kamu selalu bahagia, sehat, dan diberkahi kebaikan.
          </p>

          <p className="text-2xl font-semibold text-white">
            Dengan Sepenuh Hati,
            <br />
            [Nama Anda]
          </p>
        </div>
      </div>
    </div>
  );
}

export default BirthdayModal;