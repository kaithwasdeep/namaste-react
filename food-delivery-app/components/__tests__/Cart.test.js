import { act, fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import "@testing-library/jest-dom"
import useRestaurantMenu from "../../utils/useRestaurantMenu"
import resMenuData from "../../utils/mockRestaurantMenuData"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import Cart from "../Cart"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(resMenuData)
        }
    })
})

test("Should load the Restaurant Menu component", async () => {
    await act(async () => {
        render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
        )
    })
    const categoryText = screen.getByText("Sweets(33)");
    expect(categoryText).toBeInTheDocument();

    fireEvent.click(categoryText);

    const resItems = screen.getAllByTestId("resItem");
    expect(resItems.length).toBe(33);

    const resItemBtns = screen.getAllByRole("button", {name: "Add +"})
    expect(resItemBtns.length).toBe(33)

    const emptyCart = screen.getByText("Cart - (0 items)")
    expect(emptyCart).toBeInTheDocument();

    fireEvent.click(resItemBtns[0])
    fireEvent.click(resItemBtns[1])

    const filledCart = screen.getByText("Cart - (2 items)")
    expect(filledCart).toBeInTheDocument();

    const resItemsAfter = screen.getAllByTestId("resItem");
    expect(resItemsAfter.length).toBe(35);

    const clearCartBtn = screen.getByRole("button", {name: "Clear Cart"})
    expect(clearCartBtn).toBeInTheDocument();

    fireEvent.click(clearCartBtn)

    const resItemsAfterClear = screen.getAllByTestId("resItem");
    expect(resItemsAfterClear.length).toBe(33);
})