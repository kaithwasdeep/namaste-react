import { useState, useEffect } from "react";
import resMenuData from "./mockRestaurantMenuData";
import axios from "axios";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=1250117"
            );

            // console.log("here 1 === ")
            // console.log("response == ",response.data);
            // console.log("resMenuData ===== ", resMenuData);
            setResInfo(resMenuData);
        } catch (err) {
            console.error(err);
        }
    }
    return resInfo;
}

export default useRestaurantMenu;