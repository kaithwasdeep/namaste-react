import { useState } from "react";
import RestaurantCategoryItemList from "./RestaurantCategoryItemList";

const RestaurantCategory = ({data, showItems, showIndex}) => {
    // const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        // setShowItems(!showItems);
        showIndex();
    }
    return data && (
        <div className="res-item-categories">
            <div className="res-item-category-title" onClick={handleClick}>
                <div>{data?.title}({data?.itemCards?.length})</div>
                <div>⬇️</div>
            </div>
            {
                showItems && data?.itemCards.map(item => <RestaurantCategoryItemList item={item?.card?.info} key={item?.card?.info?.id} /> )
            }
            
        </div>
    )
}

export default RestaurantCategory;