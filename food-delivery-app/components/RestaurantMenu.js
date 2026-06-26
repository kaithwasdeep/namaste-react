import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useState } from "react";
import resMenuData from "../utils/mockRestaurantMenuData";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const [showIndex, setShowIndex] = useState(null);
    
    // const resInfo = useRestaurantMenu(resId);
    // console.log("resInfo == ", resInfo);

    const [resInfo, setResInfo] = useState(resMenuData)
    // useEffect(() => {
    //     fetchData();
    // }, []);

    const fetchData = async () => {
        try {
            // const response = await axios.get(
            //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=1250117"
            // );

            // console.log("here 1 === ")
            // console.log("response == ",response.data);
            // console.log("resMenuData ===== ", resMenuData);
            setResInfo(resMenuData);
        } catch (err) {
            console.error(err);
        }
    }

    // fetchData();

    const resMenu = resInfo?.data?.cards[2];
    if(!resMenu) return <Shimmer />;

    const resMenuItemCategories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.["REGULAR"]?.cards.filter(item => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log("resMenu == ", resMenu); 
    // console.log("resMenuItemCategories == ", resMenuItemCategories); 
    return resMenu && (
        <div className="res-menu-container">
            {/* <h1>Restaurant Menu Detail</h1> */}
            <h1>{resMenu?.card?.card?.info?.name}</h1>
            <h2>{resMenu?.card?.card?.info?.avgRating}({resMenu?.card?.card?.info?.totalRatingsString}) - {resMenu?.card?.card?.info?.costForTwoMessage}</h2>
            {
                resMenuItemCategories.map((itemCategory, index) => <RestaurantCategory data={itemCategory?.card?.card} key={itemCategory?.card?.card?.categoryId} showItems={index===showIndex ?? true} showIndex={() => setShowIndex(index)} />)
            }

            {/* <div className="res-item-categories">
                <div className="res-item-category-title">
                    <div>Recommended(12)</div>
                    <div>⬇️</div>
                </div>
                <div>
                    <span>Item Categories</span>
                </div>
            </div>
            <div className="res-item-categories">
                <div className="res-item-category-title">
                    <div>Recommended(12)</div>
                    <div>⬇️</div>
                </div>
                <div>
                    <span>Item Categories</span>
                </div>
            </div> */}

        </div>
    )
}

export default RestaurantMenu;