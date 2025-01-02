import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 relative">
      <div className="container mx-auto px-4 mb-16 h-400">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <div className="hidden sm:flex space-x-4 mb-4">
              <i className="fab fa-facebook-f text-white text-2xl hover:text-pink-500 cursor-pointer"></i>
              <i className="fab fa-twitter text-white text-2xl hover:text-pink-500 cursor-pointer"></i>
              <i className="fab fa-instagram text-white text-2xl hover:text-pink-500 cursor-pointer"></i>
              <i className="fab fa-youtube text-white text-2xl hover:text-pink-500 cursor-pointer"></i>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#submit" className="hover:underline">Submit Article</a>
              </li>
              <li>
                <a href="#blog" className="hover:underline">Blog</a>
              </li>
              <li>
                <a href="#freebies" className="hover:underline">Freebies</a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline">Pricing</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center sm:hidden">
                <span className="ml-4">(888) 231 4522 258</span>
              </div>
              <div className="flex items-center sm:hidden">
                <span className="ml-4">
                  3129 Doctors Drive, Los Angeles
                  <br />
                  California, USA
                </span>
              </div>
              <div className="hidden sm:flex items-center">
                <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <span className="ml-4">(888) 231 4522 258</span>
              </div>
              <div className="hidden sm:flex items-center">
                <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span className="ml-4">
                  3129 Doctors Drive, Los Angeles
                  <br />
                  California, USA
                </span>
              </div>
            </div>
          </div>

          <div>
          <h3 className="font-semibold text-lg mb-4 hidden sm:block">Gallery Showcase</h3>            <div className="grid grid-cols-3 gap-2 hidden sm:grid">
              <img
                src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Gallery 1"
                className="w-auto h-20 object-cover rounded"
              />
              <img
                src="https://images.pexels.com/photos/14738146/pexels-photo-14738146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Gallery 2"
                className="w-auto h-20 object-cover rounded"
              />
              <img
                src="https://images.pexels.com/photos/797868/pexels-photo-797868.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Gallery 3"
                className="w-auto h-20 object-cover rounded"
              />
              <img
                src="https://images.pexels.com/photos/7598904/pexels-photo-7598904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Gallery 4"
                className="w-auto h-20 object-cover rounded"
              />
              <img
                src="https://images.pexels.com/photos/11303805/pexels-photo-11303805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Gallery 5"
                className="w-auto h-20 object-cover rounded"
              />
              <img
                src="https://images.pexels.com/photos/11392568/pexels-photo-11392568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Gallery 6"
                className="w-auto h-20 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex justify-center space-x-4 mb-8">
        <i className="fab fa-facebook-f text-white text-2xl hover:text-pink-500 cursor-pointer p-2"></i>
        <i className="fab fa-twitter text-white text-2xl hover:text-pink-500 cursor-pointer  p-2"></i>
        <i className="fab fa-instagram text-white text-2xl hover:text-pink-500 cursor-pointer  p-2"></i>
        <i className="fab fa-youtube text-white text-2xl hover:text-pink-500 cursor-pointer  p-2"></i>
      </div>
   
      <div className="absolute bottom-0 left-0 w-full h-12 bg-pink-500"></div>
    </footer>
  );
};

export default Footer;