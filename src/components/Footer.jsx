import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 text-white sm:py-16 font-poppins">
      <div className="container grid grid-cols-1 gap-8 px-4 mx-auto sm:px-6 lg:px-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-base font-semibold">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-400">About</a></li>
            <li><a href="#" className="text-sm text-gray-400">Jobs</a></li>
            <li><a href="#" className="text-sm text-gray-400">For the Record</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-base font-semibold">Communities</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-400">For Artists</a></li>
            <li><a href="#" className="text-sm text-gray-400">Developers</a></li>
            <li><a href="#" className="text-sm text-gray-400">Advertising</a></li>
            <li><a href="#" className="text-sm text-gray-400">Investors</a></li>
            <li><a href="#" className="text-sm text-gray-400">Vendors</a></li>
          </ul>
        </div>
        <div className='hidden lg:block'>
          <h3 className="mb-4 text-base font-semibold">Useful links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-400">Support</a></li>
            <li><a href="#" className="text-sm text-gray-400">Free Mobile App</a></li>
          </ul>
        </div>
        <div className='hidden lg:block'>
          <h3 className="mb-4 text-base font-semibold">Spotify Plans</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-400">Premium Individual</a></li>
            <li><a href="#" className="text-sm text-gray-400">Premium Duo</a></li>
            <li><a href="#" className="text-sm text-gray-400">Premium Family</a></li>
            <li><a href="#" className="text-sm text-gray-400">Premium Student</a></li>
            <li><a href="#" className="text-sm text-gray-400">Spotify Free</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} Spotify AB</p>
      </div>
    </footer>
  );
};

export default Footer;