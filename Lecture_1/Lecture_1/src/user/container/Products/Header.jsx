import React from "react";

// eslint-disable-next-line react/prop-types
const Header = ({ setSearchQuery }) => {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <nav className=" py-4 px-5 text-white flex items-center">
        <div>
          <img
            src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png"
            className="h-12"
            alt=""
          />
        </div>
        <div className="font-semibold text-black">
          <a className="mr-7 ml-2" href="#">
            Men
          </a>
          <a className="mr-7" href="#">
            Women
          </a>
          <a className="mr-7" href="#">
            Kids
          </a>
          <a className="mr-7" href="#">
            Home
          </a>
          <a className="mr-7" href="#">
            Electronics
          </a>
          <a className="mr-10" href="#">
            Beauty
          </a>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-gray-300 text-black bg-white h-10 px-5 pr-44 rounded-lg text-sm focus:outline-none"
            onChange={handleSearch}
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-5.2-5.2c1.2-1.6 1.9-3.6 1.9-5.8 0-5-4-9-9-9s-9 4-9 9 4 9 9 9c2.2 0 4.2-0.7 5.8-1.9l5.2 5.2 2.8-2.8zM3 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z" />
            </svg>
          </button>
        </div>
        <div>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 ml-4 rounded-lg"
          >
            Add to Cart
          </button>
          <button
            type="button"
            className="bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-3 ml-2 rounded-lg"
          >
            Sign Up
            
          </button>
      
        </div>
      </nav>
    </>
  );
};

export default Header;
