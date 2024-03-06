import React, { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Product = ({ search }) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    setProductData(data);
  };

  const filteredProducts = productData.filter((product) =>
    // eslint-disable-next-line react/prop-types
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <div className=" font-bold p-4 mr-16 ml-12 rounded bg-slate-400  ">
      <div>
        <select name="" id="" className=" p-2 rounded-md cursor-pointer" >
          <option value="">Select Catagory</option>
          <option value="electronics">electronics
          </option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">mens clothing
          </option>
          <option value="women's clothing">womens clothing
          </option>
        </select>
        <select name="" id="" className=" p-2 rounded-md cursor-pointer ml-4">
          <option value="">Sorting</option>
          <option value="ascending">A to Z</option>
          <option value="descending">Z to A</option>
        </select>
      </div>
    </div>
      <div className="grid grid-cols-4 gap-4 p-12">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="bg-gray-100  border-2 border-solid border-gray-600 p-4 m-4 rounded-md"
          >
            <img
              src={product.image}
              alt={product.title}
              className="mt-2 w-full h-48 object-cover"
            />
            <h1 id="title" className="text-xl mt-2 font-bold">
              {product.title.substring(0, 10) + "..."}
            </h1>
            <p className="text-gray-600">Price: {product.price}</p>

            <p className="mt-1">Category: {product.category}</p>
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
