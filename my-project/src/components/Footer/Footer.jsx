/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white p-8 grid grid-cols-4">
        {/* Products Column */}
        <div>
          <h3 className="text-lg font-bold mb-2">Products</h3>
          <ul>
            <li>
              <a href="/products" className="text-gray-400 hover:text-white">
                Whey Protine
              </a>
            </li>
            <li>
              <a href="/products" className="text-gray-400 hover:text-white">
                Creatine Monohydrate
              </a>
            </li>
            <li>
              <a href="/products" className="text-gray-400 hover:text-white">
                L Arginine
              </a>
            </li>
            <li>
              <a href="/products" className="text-gray-400 hover:text-white">
                L Citraline Malate
              </a>
            </li>
            <li>
              <a href="/products" className="text-gray-400 hover:text-white">
                L Tyrosine
              </a>
            </li>
            {/* Add more products here */}
          </ul>
        </div>

        {/* Categories Column */}
        <div>
          <h3 className="text-lg font-bold mb-2">Categories</h3>
          <ul>
            <li>
              <a href="/categories" className="text-gray-400 hover:text-white">
                Protine Supplements
              </a>
            </li>
            <li>
              <a href="/categories" className="text-gray-400 hover:text-white">
                Amino Acids
              </a>
            </li>
            {/* Add more categories here */}
          </ul>
        </div>

        {/* Useful Links Column */}
        <div>
          <h3 className="text-lg font-bold mb-2">Useful Links</h3>
          <ul>
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
            {/* Add more useful links here */}
          </ul>
        </div>

        {/* Subscription Form and Contact Information */}
        <div className="text-gray-400">
          {/* Newsletter Subscription Form */}
          <form className="mb-4">
            <label htmlFor="email" className="block text-sm">
              Subscribe to Newsletter
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" Enter your email"
              className="w-full p-2 mt-1 bg-gray-800 rounded"
            />
            <button
              type="submit"
              className="w-full mt-2 p-2 bg-yellow-500 rounded text-black"
            >
              Submit
            </button>
          </form>

          {/* Social Media Icons */}
          {/* Payment Methods */}
          {/* Contact Information */}
          {/* Add relevant content here */}
        </div>
      </div>

      <div className="bg-black text-white p-8">
        <p className="mb-2">+91 85 277 32 632</p>
        <p className="mb-4">info@Muscleblaze.com</p>

        <div className="flex mb-4 space-x-2">
          {/* Replace # with actual links */}
          <a href="#" className="text-yellow-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-yellow-500 w-12 h-10">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png" alt="" />
          </a>
          <a href="#" className="text-yellow-500 w-12 h-10">
            <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1710115200&semt=ais" alt="" />
          </a>
          <a href="#" className="text-yellow-500 w-12 h-10">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" />
          </a>
          <a href="#" className="text-yellow-500 w-12 h-10">
            <img className="rounded-lg mt-1" src="https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg" alt="" />
          </a>
        </div>

        <p className="mb-2">100% Safe & Secure payments:</p>

        {/* Replace # with actual links */}
        <div className="flex space-x-2" >
          <img className="h-10 w-18" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/2560px-Old_Visa_Logo.svg.png" alt="" />
          <img className="h-10 w-18" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/UPI-Logo.png" alt="" />
          <img className="h-10 w-18" src="https://images.fastcompany.net/image/upload/w_1200,c_limit,q_auto:best/wp-cms/uploads/2023/04/i-3-90885664-mastercard-logo.jpg" alt="" />
          <img className="h-10 w-18" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/RuPay-Logo.png" alt="" />
        </div>
      </div>

      <div className="bg-gray-950 text-white p-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Muscleblaze. All rights reserved.
        </p>
      </div>

    </>
  );
};

export default Footer;
