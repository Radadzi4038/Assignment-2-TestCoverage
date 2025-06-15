import calculateCanvasSize from "./calculateCanvasSize";
import paintRequiredCalculator from "./paintRequiredCalculator";

function main() {
  try {
    const length = "10"; // You could also read these from user input later
    const width = "20";
    const coveragePerLiter = 11.4;

    const area = calculateCanvasSize(length, width);
    const paintRequired = paintRequiredCalculator(area, coveragePerLiter);

    console.log(`Paint required: ${paintRequired.toFixed(2)}L for an area of ${area} sq units.`);
  } catch (error: any) {
    console.error(" Error:", error.message);
  }
}

main();
