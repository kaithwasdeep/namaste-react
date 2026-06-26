import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const RestaurantCategoryItemList = ({item}) => {

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
    return item && (
        <div className="category-item-list" data-testid="resItem">
            <div className="category-item-list-title">
                <div className="category-item-list-title-text">
                    <span>{item?.name}</span>
                    <span> - ₹{item?.price/100}</span>
                </div>
                <p className="category-item-list-desc">{item?.description}</p>
            </div>
            <div className="category-item-list-image">
                <div className="category-item-list-add-btn">
                    <button onClick={() => handleAddItem(item)} >Add +</button>
                </div>
                <img src={CDN_URL+item?.imageId} />
            </div>
        </div>
    )
}

export default RestaurantCategoryItemList;