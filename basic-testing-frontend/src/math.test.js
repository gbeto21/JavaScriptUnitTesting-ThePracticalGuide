import { it, expect } from "vitest";
import { add } from "./math";

it("should sumarize all number values in an array", () => {
  //Arrange phase
  const number = [1, 2, 3];
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );

  //Act phase
  const result = add(number);

  //Assert phase
  expect(result).toBe(expectedResult);
});
