import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPureVegLabel } from "../RestaurantCard"
import resCardMockData from "../mocks/resCardMockData.json"
import "@testing-library/jest-dom"

test("Should render RestaurantCard component with props data", () => {
    render(<RestaurantCard resData={resCardMockData} />)
    const resName = screen.getByText("Naadbramha Idli")
    expect(resName).toBeInTheDocument()
})

test("Should render Restaurantcard component with promoted label", () => {
    const PureVegLabelCard = withPureVegLabel(RestaurantCard);
    render(<PureVegLabelCard  resData={resCardMockData} />)
    const resName = screen.getByText("Pure Veg");
    expect(resName).toBeInTheDocument();
})