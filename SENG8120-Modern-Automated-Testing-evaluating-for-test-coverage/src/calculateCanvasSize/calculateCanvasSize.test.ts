import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");

    expect(result).toEqual(1000);
  })

  test("should return 0 if one side is 0", () => {
    expect(calculateCanvasSize("0", "10")).toBe(0);
  });

  test("should throw an error if input is not a number", () => {
    expect(() => calculateCanvasSize("abc", "10")).toThrow("Invalid input");
  });

  test("handles very large dimensions correctly", () => {
    const result = calculateCanvasSize("10000", "10000");
    expect(result).toEqual(100000000);
  });

  test("handles decimal string inputs correctly", () => {
    const result = calculateCanvasSize("10.5", "2");
    expect(result).toEqual(20); // parseInt("10.5") to 10, 10 * 2 = 20
  });

}

);
