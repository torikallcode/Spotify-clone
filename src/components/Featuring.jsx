import React, { useState } from 'react';

const Featuring = () => {
  const [activeTab, setActiveTab] = useState('Bernadya Radio');

  const tabs = [
    'Bernadya Radio',
    'Lagi Viral',
    'Hot Hits Indonesia',
    'Puncak Klasemen'
  ];

  const playlists = {
    'Bernadya Radio': [
      {
        artist: 'Lala',
        track: 'Trending Track',
        image: '/img/ls6.jpeg'
      },
      {
        artist: 'Lala',
        track: 'Popular Song',
        image: '/img/ls7.jpeg'
      },
      {
        artist: 'Lala',
        track: 'Hit Single',
        image: '/img/ls8.jpeg'
      },
      {
        artist: 'Lala',
        track: 'Separuh Nafas',
        image: '/img/ls9.jpeg'
      },
      {
        artist: 'Lala',
        track: 'Separuh Aku',
        image: '/img/p3-f.jpg'
      },
    ],
  };

  const getCurrentPlaylist = () => {
    return playlists[activeTab] || [];
  };

  return (
    <div className="text-white font-poppins">
      <div className="container mx-auto">
        <h1 className="mb-4 text-2xl font-bold">Featuring</h1>
        {/* Horizontal Scrolling Playlist */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex pb-4 space-x-1 overflow-x-scroll lg:space-x-2 scrollbar-hide scroll-smooth whitespace-nowrap"
          >
            {getCurrentPlaylist().map((item, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 inline-block w-40 lg:w-[213px] lg:h-[286px]  p-2 py-3 overflow-hidden rounded-lg shadow-lg cursor-pointer group hover:bg-white/10"
              >
                {/* Track Image */}
                <img
                  src={item.image}
                  alt={item.track}
                  className="object-cover w-full rounded-md h-36 lg:h-[195px] "
                />
                {/* <button className="absolute hidden w-full mt-2 text-sm text-red-600 transition-colors bg-white rounded-full bottom-16 group-hover:block hover:bg-red-100">
                  Play
                </button> */}
                {/* <div className='absolute hidden bg-gray-900 rounded-full top-36 right-2 w-11 h-11 group-hover:block'>
                  <svg className='w-full h-full' viewBox="0 0 24 24" fill="" xmlns=" http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="#35ce6b"></path> </g></svg>

                </div> */}
                {/* Track Details */}
                < div className="mt-2" >
                  <h3 className="text-sm font-semibold truncate">{item.track}</h3>
                  <p className="text-xs text-gray-300 truncate">{item.artist}</p>

                  {/* Play Button (Hidden by Default, Visible on Hover) */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div >
    </div >
  );
};

export default Featuring;
