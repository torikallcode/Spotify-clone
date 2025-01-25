import React from 'react'

export const CardAbout = () => {
  return (
    <a href="#" className="relative block bg-black inset-0 group aspect-[1/1] lg:aspect-[5/3]  max-h-[450px] bg-cover bg-center " style={{ backgroundImage: `url(/img/p3.jpeg)` }}>
      {/* <img
        alt=""
        src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        className="absolute inset-0 object-cover w-full h-full transition-opacity bg-top rounded-md opacity-50"
      /> */}
      <span className='absolute z-10 w-full h-full bg-black opacity-40'></span>

      <div className="relative z-20 flex items-end w-full h-full p-4 sm:p-6 lg:p-8 gap-y-2">
        {/* <div className=''>
          <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">Developer</p>
          <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>
        </div> */}
        <div className="">
          <div
            className="opacity-100 "
          >
            <h2 className='text-2xl font-bold text-white'>Bernadya</h2>
            <p className="max-w-2xl text-sm text-white">
              Bernadya, the Jakarta-based singer-songwriter, is known for her heart-breaking songwriting. Debuted with her first single in 2022 which eventually became an internet sensation, Bernadya released her first EP “Terlintas” in 2023.
            </p>
          </div>
        </div>
      </div>
    </a>
  )
}