import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);

    expect(result).toEqual(5);
  });

  test("should throw if coverage per liter is 0", () => {
  expect(() => paintRequiredCalculator(100, 0)).toThrow("Coverage per liter must be greater than zero");
});

test("throws error when coverage per liter is negative", () => {
  expect(() => paintRequiredCalculator(100, -5)).toThrow("Coverage per liter must be greater than zero");
});

test("calculates correctly with decimal area and coverage", () => {
  const result = paintRequiredCalculator(22.8, 11.4);
  expect(result).toBeCloseTo(2.0); // 22.8 ÷ 11.4 = 2
});

});
