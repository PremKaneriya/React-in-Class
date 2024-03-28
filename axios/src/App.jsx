import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading)
    return (
      <h1 className="text-8xl text-center mt-40 capitalize font-bold py-5">
        Loading...
      </h1>
    );

  if (error) return <h1>{error}</h1>;

  return (
    <>
      <h1 className="text-4xl text-center capitalize font-bold bg-blue-300 text-blue-800 py-5">
        axios
      </h1>
      <div
        className="flex flex-wrap justify
      -center"
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-blue-200 w-1/4 p-5 mt-10 rounded-lg shadow-lg"
          >
            <h1>{item.title}</h1>
            <p>{item.price}</p>
            <img
              src={item.image}
              alt={item.title}
              className="w-full"
              height={200}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
