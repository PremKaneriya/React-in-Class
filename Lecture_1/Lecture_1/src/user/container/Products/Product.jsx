import React, { useState, useEffect } from "react";
import Header from "./Header";

const Product = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    setProductData(data);
  };

  return (
    <>
      <Header />
      <div className="grid grid-cols-4 gap-4 p-12">
        {productData.map((product, index) => (
          <div
            key={index}
            className="bg-gray-100  border-2 border-solid border-gray-600 p-4 m-4 rounded-md"
          >
            <h1 className="text-xl font-bold">
              {product.title.substring(0, 10) + "..."}
            </h1>
            <p className="text-gray-600">Price: {product.price}</p>
            <img
              src={product.image}
              alt={product.title}
              className="mt-2 w-full h-48 object-cover"
            />
            <p className="mt-2">
              {product.description.substring(0, 10) + "..."}
            </p>
            <p className="mt-2">Category: {product.category}</p>
            <div className="flex items-center mt-2">
              <p className="mr-2">Rating:</p>
              <p>{product.rating.rate}</p>
              <span className="mx-1">&#9733;</span>
              <p>({product.rating.count} reviews)</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
