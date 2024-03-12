/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";

const products = [
  {
    id: 1,
    img: "https://img10.hkrtcdn.com/31122/prd_3112159-MuscleBlaze-Omega-3-Fish-Oil-1000-mg-with-180mg-EPA-and-120mg-DHA-90-capsules_c_s.jpg",
    name: "Omega 3 Fish Oil (1000 mg) with 180mg EPA and 120mg DHA",
    price: "₹599",
    oldPrice: "₹999",
    discount: "20%",
    description: "90 capsules",
    rating: "Standard",
  },
  {
    id: 2,
    img: "https://img2.hkrtcdn.com/32066/prd_3206541-MuscleBlaze-Omega-3-Fish-Oil-Gold-3x-Triple-Strength-EPA-DHA-60-capsules_c_s.jpg",
    name: "Omega 3 Fish Oil Gold 3x Triple Strength (EPA & DHA)",
    price: "₹849",
    oldPrice: "₹999",
    discount: "50%",
    description: "60 capsules ",
    rating: "Premium",
  },
  {
    id: 3,
    img: "https://img2.hkrtcdn.com/28511/prd_2851051-MuscleBlaze-CreaPRO-Creatine-with-Creapure-Powder-from-Germany-0.55-lb-Unflavoured_c_s.jpg",
    name: "CreaPRO Creatine with Creapure® Powder from Germany",
    price: "₹1,149",
    oldPrice: "₹1,649",
    discount: "30%",
    description: "0.55 lb, Unflavoured ",
    rating: "Premium",
  },
  {
    id: 4,
    img: "https://img2.hkrtcdn.com/10732/prd_1073171-MuscleBlaze-Citrulline-Malate-0.22-lb-Unflavored_c_s.jpg",
    name: "L Citrulline Malate",
    price: "₹ 412",
    oldPrice: "₹ 425",
    discount: "23%",
    description: "0.22 lb, Unflavored ",
    rating: "Standard",
  },
];

const ProductsTwo = () => {
  return (
    <>
      <div className="grid grid-cols-5 bg-gradient-to-t from-yellow-300 to-white pt-12 pr-9 pb-8 pl-16 gap-4">
        <h1 className="text-5xl font-semibold">Amino Acids</h1>
        {products.map((product) => (
          <div key={product.id} className="bg-white  p-4 rounded-md shadow-md">
            <img
              src={product.img}
              alt={product.name}
              className="w-28 h-28 object-cover mx-auto my-auto"
            />
            <h3 className="mt-2 font-semibold">
              {product.name.substring(0, 20) + "..."}
            </h3>
            <p className="text-gray-600">
              {product.description.substring(0, 20) + "..."}
            </p>
            <div className="flex justify-between mt-2">
              <p className="font-bold">{product.price}</p>
              <p
                className={`mt-2 mb-2 ${
                  product.discount === "10%"
                    ? "text-orange-500"
                    : "text-red-800"
                }`}
              >
                {product.discount}
              </p>
            </div>
            <p className="text-gray-500 line-through">{product.oldPrice}</p>
            <p
              className={`mt-2 mb-2 ${
                product.rating === "Premium"
                  ? "text-orange-500"
                  : "text-gray-500"
              }`}
            >
              {product.rating}
            </p>

            <button className="py-2 px-4 bg-yellow-400 text-gray-900 w-full font-semibold rounded-md hover:bg-yellow-500">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsTwo;
