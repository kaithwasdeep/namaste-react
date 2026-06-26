import { act, fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import resListMockData from "../mocks/resListMockData.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(resListMockData)
        }
    })
})

test("Should search res list for li text input", async () => {
    await act(async () => {
        render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Body />
            </Provider>
        </BrowserRouter>)
    })

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(7);

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "nal"}});

    const searchBtn = screen.getByRole("button", {name: "Search"});
    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(2);
})

test("Should filter Top Rated Restaurant", async () => {
    await act(async () => {
        render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Body />
            </Provider>
        </BrowserRouter>)
    })

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(7);

    const filterBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(filterBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(6);

})