import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"

test("Should render Header component with a Login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    // const loginButton = screen.getByRole("button", {name: "Login"})
    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
})

it("Should render Header component with a cart items 0 button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const cart = screen.getByText("Cart - (0 items)");
    expect(cart).toBeInTheDocument();
})

test("Should render Header component with a cart item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();
})

test("Should change Login button to Logout button on Click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
})