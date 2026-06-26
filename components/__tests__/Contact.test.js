import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {

    beforeAll(() => {
        // console.log("Before All")
    })

    beforeEach(() => {
        // console.log("Before Each")
    })

    afterEach(() => {
        // console.log("After Each")
    })

    afterAll(() => {
        // console.log("After All")
    })

    test("Should load contact us page", () => {
        render(<Contact/>)
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
    // we can write "it" instead of "test". "it" is an alias of "test"
    it("Should load button inside Contact component", () => {
        render(<Contact/>)
        const btn = screen.getByText("Submit");
        expect(btn).toBeInTheDocument();
    })
    
    test("Should load input name inside Contact component", () => {
        render(<Contact />)
        const name = screen.getByPlaceholderText("Enter name");
        expect(name).toBeInTheDocument();
    })
    
    test("Should load 2 input boxes on the Contact component", () => {
        render(<Contact />)
        const names = screen.getAllByRole("textbox");
        expect(names.length).toBe(2);
    })
})
