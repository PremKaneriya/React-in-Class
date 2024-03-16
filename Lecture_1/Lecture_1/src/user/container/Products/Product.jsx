import React, { useState, useEffect } from "react";
import Loader from "./Loader";
// eslint-disable-next-line react/prop-types
const Product = ({ search }) => {
  const [productData, setProductData] = useState([]);
  const [sorting, setSorting] = useState("");
  const [category, setcategory] = useState([]);
  const [selectedCategory , setSelectedCategory] = useState('');
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    const uniqueCategories = [...new Set(data.map((product) => product.category))];

    setcategory(uniqueCategories);
    setProductData(data);
    setloading(false);
  };

  const allFilterData = () => {
    let filteredProducts = productData.filter(
      (product) =>
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
    });

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter((product) => product.category === selectedCategory);
    }

    return filteredProducts;
  };

  const finalData = allFilterData();

  return (
    <>
      <div className=" font-bold p-2 mr-16 ml-12 rounded-xl border-2 border-solid border-gray-300 justify-between flex items-center">
        <div>
       
          <select
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

      <div>
        {category && (
          <div
            className=" p-2 text-center rounded-md bg-pink-200 cursor-pointer ml-4"
            onClick={(e) => setSelectedCategory(e.target.value)}
          >
            
            {category.map((category) => (
              <button className=" p-2 text-center rounded-md bg-pink-200 cursor-pointer ml-4" value={category} key={category}>
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

    </div>

      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-cols-4 gap-4 p-12">
            {finalData.map((product, index) => (
              <div
                key={index}
                className="bg-gray-100  border-2 border-solid border-gray-400 cursor-pointer m-4 rounded-md"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <h1 id="title" className="text-xl mt-2 font-bold px-2">
                  {product.title.substring(0, 10) + "..."}
                </h1>
                <p className="text-gray-600 px-2">Price: {product.price}</p>

                <p className="mt-1 text-gray-600 px-2">
                  Category: {product.category}
                </p>
                <div className="flex items-center  mt-2">
                  <p className="mr-2 text-gray-600 px-2 mb-2">Rating:</p>
                  <p className="mb-2">{product.rating.rate}</p>
                  <span className="mx-1 text-yellow-500 mb-2">&#9733;</span>
                  <p className="text-gray-600 px-2 mb-2">
                    ({product.rating.count} reviews)
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Product;
