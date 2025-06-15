export default function calculateCanvasSize(length: string, width: string) {
  const len = parseInt(length);
  const wid = parseInt(width);

  if (isNaN(len) || isNaN(wid)) {
    throw new Error("Invalid input");
  }

  return len * wid;
}
