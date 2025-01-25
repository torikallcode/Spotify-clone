import React from "react";
import { X } from 'lucide-react';


export const BirthdayModal = ({ isOpen, onClose, lyrics }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="relative w-11/12 max-w-md bg-[#1a1a1a] rounded-lg shadow-2xl p-6 max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute text-gray-300 top-4 right-4 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold text-[#1DB954] mb-4">Selamat Ulang Tahun</h2>
        </div>

        <div className="space-y-4 text-center">
          {lyrics.map((line, index) => (
            <div
              key={index}
              className="text-xl font-semibold text-white animate-fade-in"
              style={{
                animationDelay: `${index * 0.5}s`,
                opacity: 0,
                animation: 'fadeIn 0.5s forwards'
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};