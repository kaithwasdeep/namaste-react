import {CDN_URL} from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({resData}) => {
    // {console.log("resData == ", resData)}
    const data = useContext(UserContext);
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData.info;
    return (
        <div className="res-card" data-testid="resCard">
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>User: {data.loggedInUser}</h4>
        </div>
    )
}

export const withPureVegLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="pure-veg-label">Pure Veg</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;