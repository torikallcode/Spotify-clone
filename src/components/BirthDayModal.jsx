import React, { useState, useEffect } from "react";
import { X, Gift, Sparkles, Heart, Star } from 'lucide-react';

export const BirthdayModal = ({
  isOpen,
  onClose,
  lyrics,
  name = "Lala",
  imageUrl = "/img/p3-f.jpg"
}) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowContent(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center 
       bg-white/10
      backdrop-blur-sm p-4 font-poppins">
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-white/50 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 10}px`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Modal */}
      <div className={`
        relative w-full max-w-lg  rounded-3xl 
        shadow-2xl overflow-hidden border-4 border-[#121212]
        transform transition-all duration-500
        ${showContent ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
      `}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute z-10 p-2 transition-all rounded-full shadow-md text-gra-100 top-4 right-4"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Celebratory Header */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={imageUrl}
            alt="Birthday Celebration"
            className="absolute inset-0 object-cover w-full h-full filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

          {/* Animated Sparkles */}
          <div className="absolute inset-0 flex items-end justify-start bottom-3 left-3">
            <div className="relative">
              <Sparkles
                className="absolute text-yellow-300 -top-2 -left-2 animate-ping"
                size={40}
              />
              <Sparkles
                className="absolute text-pink-300 -bottom-2 -right-2 animate-ping"
                size={40}
              />
              <h2 className="relative z-10 text-xl font-semibold text-white drop-shadow-lg">
                Happy Birthday, {name}!
              </h2>
            </div>
          </div>
        </div>

        {/* Lyrical Content */}
        <div className="px-6 lg:pt-6 pb-3 bg-[#121212]">
          <div className="space-y-4 text-start">
            {lyrics.map((line, index) => (
              <div
                key={index}
                className={`
                  text-base text-gray-100 
                  opacity-0 transform translate-y-10
                  transition-all duration-700 ease-out
                  ${showContent ? 'opacity-100 translate-y-0' : ''}
                `}
                style={{
                  transitionDelay: `${index * 0.3 + 0.5}s`
                }}
              >
                {line}
              </div>
            ))}
          </div>
          <h2 className={`
                  text-base text-gray-100 
                  opacity-0 transform translate-y-10
                  transition-all duration-700 ease-out
                  ${showContent ? 'opacity-100 translate-y-0' : ''}
                `}>Elka</h2>

          {/* Decorative Hearts */}
          <div className="flex justify-center space-x-2 mt-14">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="text-pink-500 animate-bounce"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  width: '24px',
                  height: '24px'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};