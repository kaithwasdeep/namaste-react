import RestaurantCard, {withPureVegLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import {RESTAURANTS_URL} from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {Link} from "react-router-dom";
// console.log(resList);
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();
    const PureVegLabelCard = withPureVegLabel(RestaurantCard);
    const userData = useContext(UserContext);
    // console.log("listOfRestaurants === ", listOfRestaurants);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTAURANTS_URL);
        // console.log("RESTAURANTS_URL === ", RESTAURANTS_URL);
        const jsonData = await data.json();
        // console.log("jsonData === ", jsonData);
        const restaurants = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
        // console.log("restaurants == ", restaurants);
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
    }
    // console.log("listOfRestaurants === ", listOfRestaurants);
    if(listOfRestaurants?.length === 0){
        return <Shimmer/>
    }

    
    if(onlineStatus === false) return <h1>Looks like you're offline! Please check your internet connection.</h1>

    return (
    <div className="body">
        <div className="filter-btn-container">
            <div className="search-section">
                <input type="text" data-testid="searchInput" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className="search-btn" onClick={() => {
                    // console.log(searchText);
                    const filteredRestaurants = listOfRestaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurants(filteredRestaurants);
                }}>Search</button>
            </div>
            <div>
                <label>Username: </label>
                <input type="text" value={userData.loggedInUser} onChange={(e) => userData.setUserName(e.target.value)} />
            </div>
            <div>
                <button className="filter-btn" onClick={
                    () => {
                        const filteredList = listOfRestaurants.filter(restaurant => restaurant.info.avgRating>4)
                        setFilteredRestaurants(filteredList);
                    }
                    
                }>Top Rated Restaurants</button>
                <button className="reset-btn" onClick={
                    () => {
                        setFilteredRestaurants(listOfRestaurants);
                    }
                }>Reset</button>
            </div>
        </div>
        <div className="res-container">
            {
                filteredRestaurants.map((restaurant) => {
                    return (
                        restaurant.info.veg ? (<Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><PureVegLabelCard resData={restaurant}  /></Link>) :
                        (<Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>)
                    )
                })
            }
        </div>
    </div>
)}

export default Body;