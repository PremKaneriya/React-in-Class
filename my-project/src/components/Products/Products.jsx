/* eslint-disable no-unused-vars */

import React from "react";

const products = [
  {
    id: 1,
    img: "https://img7.hkrtcdn.com/27176/prd_2717576-MuscleBlaze-Biozyme-Performance-Whey-2.2-lb-Rich-Chocolate_c_m.jpg",
    name: "Biozyme Performance Whey",
    price: "₹1,499",
    oldPrice: "₹1,999",
    discount: "10%",
    description: "2.2 lb Rich Chocolate",
    rating: "Premium",
  },
  {
    id: 2,
    img: "https://img10.hkrtcdn.com/29763/prd_2976269-MuscleBlaze-Mass-Gainer-XXL-with-Complex-Carbs-and-Proteins-in-31-ratio-4.4-lb-Chocolate_c_m.jpg",
    name: "Mass Gainer XXL",
    price: "₹2,099",
    oldPrice: "₹2,499",
    discount: "50%",
    description: "  4.4 lb  Chocolate ",
    rating: "Premium",
  },
  {
    id: 3,
    img: "https://img8.hkrtcdn.com/32169/prd_3216827-MuscleBlaze-Creatine-Monohydrate-0.88-lb-Unflavoured_c_m.jpg",
    name: "Creatine Monohydrate CreAMP,",
    price: "₹ 499",
    oldPrice: "₹1,112",
    discount: "30%",
    description: "  0.88 lb  Unflavoured ",
    rating: "Standard",
  },
  {
    id: 4,
    img: "https://img9.hkrtcdn.com/22852/prd_2285188-MuscleBlaze-Protein-Bar-20-gm-Protein-6-bars-Cookies-Cream_c_m.jpg",
    name: "High Protein Muesli,",
    price: "₹ 699",
    oldPrice: "₹ 999",
    discount: "10%",
    description: "  1 kg  Dark Chocolate & Cranberry ",
    rating: "Standard",
  },
  // {
  //   id: 5,
  //   img: "https://img8.hkrtcdn.com/29896/prd_2989517-MuscleBlaze-High-Protein-Peanut-Butter-1-kg-Dark-Chocolate-Creamy_c_m.jpg",
  //   name: "High Protein Peanut Butter,",
  //   price: "₹ 999",
  //   oldPrice: "₹ 1,999",
  //   discount: "10%",
  //   description: "  1 kg  Dark Chocolate Creamy ",
  //   rating: "Premium",
  // },
];

const Products = () => {
  return (
    <>
      <div className="grid grid-cols-5 bg-gradient-to-b from-yellow-300 to-white pt-12 mt-44 pr-9 pb-8 pl-16 gap-4">
      <h1 className="text-5xl font-semibold">Popular</h1>
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

export default Products;
