import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");

    expect(result).toEqual(1000);
  })

  test("should return 0 if one side is 0", () => {
  expect(calculateCanvasSize("0", "10")).toBe(10);
});

}

);
