import RestaurantCard from "./RestaurantCard";
import React, { useState, useEffect } from "react";
import resList from "../utils/mockData";

const Body = () => {
  //Local state variable - super poweful variable
  const [listOfRestaurants, setListRestaurant] = useState(resList);

  //Normal Js variable
  // let resList = [];

  useEffect(() => {
    //After useEffect render
    // console.log("useEffect Called");
    // fetchData();
  }, []);

  // const fetchData = async () => {
  //   const data = fetch(
  //     "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId="
  //   );

  //   const json = await data.json();

  //   console.log(json);
  //   setListRestaurant(json);
  // };

  console.log("Body Rendered"); //Body render

  return (
    <div className="body">
      {/* <div className="Search m-2">
        <input
          type="text"
          className="border border-solid border-black"
          value=""
        />
        <button className="px-4 py-1 bg-green-100 m-4" type="button">
          Search
        </button>
      </div> */}

      <div className="filter bg-red-100 p-1 my-4 mx-3 w-48">
        <button
          type="button"
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4.2
            );
            setListRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container flex flex-wrap">
        {/* RestaurantCard component */}
        {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} /> */}

        {
          //Using Map function
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))
          //not using keys (not acceptable) <<< index as key >>> unique id (best practics)
        }
      </div>
    </div>
  );
};

export default Body;
