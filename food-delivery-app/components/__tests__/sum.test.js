import { sum } from "../sum"

test("sum function should calculate the sum of two numbers", () => {
    const result = sum(3,7);
    expect(result).toBe(10);
})