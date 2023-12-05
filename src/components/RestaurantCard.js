import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData.data;

  return (
    <div className="res-card border border-gray-400 bg-gray-100 w-56 h-80 py-2 px-2 mx-2 my-2 bg-gray-20 hover:bg-gray-200">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData.data.cloudinaryImageId}
      />
      {/* <h3>{resData.data.name}</h3> */}
      <h3 className="mt-3 font-bold">{name}</h3>
      <h4 className="text-sm">{cuisines.join(" , ")}</h4>
      <h4>{avgRating}</h4>
      <h4 className="font-bold text-sm">₹{costForTwo / 100} FOR TWO</h4>
      <h4 className="font-bold text-sm">{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
