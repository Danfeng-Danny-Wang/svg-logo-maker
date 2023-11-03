// import { Triangle } from "./shapes";
const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  test("Render a blue triangle SVG", () => {
    const expectedResult =
      '<polygon points="0, 0 150, 0 75, 150" fill="blue" />';
    const newTriangle = new Triangle();
    newTriangle.setColor("blue");
    const renderedResult = newTriangle.render();
    expect(renderedResult).toEqual(expectedResult);
  });
});

describe("Circle", () => {
  test("Render a blue circle SVG", () => {
    const expectedResult = '<circle cx="25" cy="25" r="50" fill="blue" />';
    const newCircle = new Circle();
    newCircle.setColor("blue");
    const renderedResult = newCircle.render();
    expect(renderedResult).toEqual(expectedResult);
  });
});

describe("Square", () => {
  test("Render a blue square SVG", () => {
    const expectedResult =
      '<rect x="10" y="10" width="100" height="100" fill="blue" />';
    const newSquare = new Square();
    newSquare.setColor("blue");
    const renderedResult = newSquare.render();
    expect(renderedResult).toEqual(expectedResult);
  });
});
