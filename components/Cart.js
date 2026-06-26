import { useDispatch, useSelector } from "react-redux";
import RestaurantCategoryItemList from "./RestaurantCategoryItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    
    return (
        <div className="cart-container">
            <h1>Cart</h1>
            <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 && (
                <h2>Cart is empty.</h2>
            )}
            <div className="cart-section">
                {
                    cartItems.map(item => <RestaurantCategoryItemList  item={item} key={item?.id} />)
                }
            </div>
        </div>
    )
}

export default Cart;