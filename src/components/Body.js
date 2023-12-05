import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
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

      {/* <div className="filter bg-red-100 p-1 m-2 w-48">
        <button className="filter-btn"> Top Rated Restaurants</button>
      </div> */}

      <div className="res-container flex flex-wrap">
        {/* RestaurantCard component */}
        {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} /> */}

        {
          //Using Map function
          resList.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))
          //not using keys (not acceptable) <<< index as key >>> unique id (best practics)
        }
      </div>
    </div>
  );
};

export default Body;
