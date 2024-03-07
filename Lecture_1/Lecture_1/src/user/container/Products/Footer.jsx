import React from "react";

const Footer = () => {
  return (
    <>
      <div className="py-4 px-16 bg-pink-100 flex items-center bg-white ">
        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <h3 className="text-lg font-bold mb-4">ONLINE SHOPPING</h3>

              <ul>
                <li>Men</li>

                <li>Women</li>

                <li>Kids</li>

                <li>Home & Living</li>

                <li>Beauty</li>

                <li>Gift Cards</li>

                <li>Myntra Insider</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">CUSTOMER POLICIES</h3>

              <ul>
                <li>Contact Us</li>

                <li>FAQ</li>

                <li>T&C</li>

                <li>Terms Of Use</li>

                <li>Track Orders</li>

                <li>Shipping</li>

                <li>Cancellation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">
                EXPERIENCE MYNTRA APP ON MOBILE
              </h3>

              <div className="flex items-center">
                <a href="#" className="text-gray-800 px-4 py-2 rounded mr-2">
                  <img
                    src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                    alt="Google Play"
                  />
                </a>

                <a href="#" className=" text-white px-4 py-2 rounded">
                  <img
                    src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                    alt="App Store"
                  />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-center">ORIGINAL</h3>

              <img
                src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Footer;
