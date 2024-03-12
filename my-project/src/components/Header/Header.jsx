// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line no-unused-vars
import { faWallet } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
      <nav className="fixed top-0 w-full z-10 cursor-pointer flex items-center h-24 justify-between px-8 bg-white shadow-xl">
       <div className="flex items-center">
       <div>
          <img
            src="https://cdn.labdoor.io/brand/images/npjn65sqqnrw4117kp28io.jpg"
            className=" h-24 mr-4"
            alt=""
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search Products . . . ."
            className="border-2 border-gray-400 bg-gray-300 h-12 w-96 px-5 rounded placeholder:text-black text-black focus:outline-none"
          />
        </div>
       </div>
        <div className="flex items-center px-5">
            
        <div className="flex items-center">
          <FontAwesomeIcon icon={faShoppingCart} className="text-2xl text-gray-800" />
          <FontAwesomeIcon icon={faWallet} className="ml-8 text-2xl mr-7 text-gray-800" />
        </div>
        <div>
            <button className="bg-yellow-400 py-3 px-6 ml-4 rounded font-bold text-black">Login/Sign Up</button>
        </div>
        </div>
      </nav>
      <div className="dropDowns mt-24 flex justify-between items-center font-semibold px-16 bg-white mt-2">
        <div>
            <select className="p-6 text-center bg-transparent" name="" id="">
                <option value="0">ALL PRODUCTS</option>
                <option value="protine">PROTEINS</option>
                <option value="gainers">GAINERS</option>
                <option value="prepostworkout">PRE/POST WORKOUT</option>
                <option value="fitfoods">FIT FOODS</option>
            </select>
        </div>
        <div className="p-6 text-center">
            <h1>OFFERS</h1>
        </div>
        <div> 
            <select className="p-6 text-center bg-transparent"  name="" id="">
                <option value="0">STORES</option>
                <option value="mbfit">MB FIT</option>
                <option value="fuelone">FUEL ONE</option>
                <option value="fitassesaries">FITNESS ASSESARIES</option>
            </select>
        </div>
        <div className="p-6 text-center">
            <h1 >OUR STORY</h1>
        </div>
        <div>
            <select className="p-6 bg-transparent text-center" name="" id="">
                <option value="0">AUTHENTICITY</option>
                <option value="checkauthe">CHECK AUTHENTICITY</option>
                <option value="protinelab">LAB TEST</option>
            </select>
        </div>
        <div className="p-6 text-center">
            <h1>CHAT SUPPORT</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
