import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useState } from "react"

let resList = resData;

const Body = () => {
  // let restaurantList = resData
  const[ restaurantList, setRestaurantList ] =useState(resList)
  
  return (
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn"
          onClick={()=>{
            filteredResList = resList.filter(x => x.info.avgRating >= 4)
            setRestaurantList(filteredResList)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body