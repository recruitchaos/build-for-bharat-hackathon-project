import React, { useEffect, useState } from "react";
import { Trending } from "./Trending";
import { useParams } from "react-router-dom";

export const CategoryWiseProductPage = () => {
  const [data, setData] = useState(null);

  const { type } = useParams();
  console.log(type);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${encodeURIComponent(type)}`
        );

        if (!response.ok) {
          throw new Error("HTTP error");
        }

        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function here

  }, [type]); // Add category as a dependency

  return (
    <div className="grid md:auto-rows-max md:grid-flow-col md:px-12 md:py-12 gap-4 font-display">
      {data && data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="flex grid w-[200px] h-[200px]">
            {/* Render each item's properties */}
            <img className=" md:h-[200px] md:pb-8 h-[100px]" src={item.image} alt=""/>
            <h1>${item.price}</h1>
            <h3>{item.title}</h3>
            {/* Add more properties as needed */}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
