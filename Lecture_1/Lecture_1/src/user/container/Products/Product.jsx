import React, { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Product = ({ search }) => {
  const [productData, setProductData] = useState([]);
  const [sorting, setSorting] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    setProductData(data);
  };

  const allFilterData = () => {
    let filteredProducts = productData.filter((product) =>
      // eslint-disable-next-line react/prop-types
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.price.toString().includes(search)
    );

    filteredProducts = filteredProducts.sort((a, b) => {
      if (sorting === "lh") {
        return a.price - b.price;
      } else if (sorting === "hl") {
        return b.price - a.price;
      } else if (sorting === "ascending") {
        return a.title.localeCompare(b.title);
      } else if (sorting === "descending") {
        return b.title.localeCompare(a.title);
      }
    })

    return filteredProducts;

  };

  const finalData = allFilterData();

  return (
    <>
      <div className=" font-bold p-2 mr-16 ml-12 rounded bg-gray-200 justify-between flex items-center">
        <div>
          <select
            name=""
            id=""
            className=" p-2 rounded-md bg-pink-200 cursor-pointer text-center"
          >
            <option value="">Select Catagory</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">mens clothing</option>
            <option value="women's clothing">womens clothing</option>
          </select>
          <select
            name=""
            id=""
            className=" p-2 text-center rounded-md bg-pink-200 cursor-pointer ml-4"
            onChange={(e) => setSorting(e.target.value)}
          >
            <option value="0">Sorting</option>
            <option value="lh">Price : Low to High</option>
            <option value="hl">Price : High to Low</option>
            <option value="ascending">Sort : A to Z</option>
            <option value="descending">Sort : Z to A</option>
          </select>
        </div>
        <div className="flex gap-5 items-center ml-3 mr-3">
          <a href="#">Studio</a>
          <a href="#">Home & Living</a>
          <a href="#">Footwear</a>
          <a href="#">Top Offers</a>
          <a href="#">Deals</a>
          <a href="#">Explore</a>
          <a href="#">My Account</a>
        </div>
      </div>
 
      <div className="grid grid-cols-4 gap-4 p-12">
        {finalData.map((product, index) => (
          <div
            key={index}
            className="bg-gray-100  border-2 border-solid border-gray-400 cursor-pointer p-4 m-4 rounded-md"
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
