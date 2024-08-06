import { calculateScrabbleScore } from "./scrabble-score";
import {test, expect} from "vitest";


//calculate the score of a single input ✅
// test('test 1', () =>{
//     expect(calculateScrabbleScore("A")).toBe(1)
// })


test.each([
    ["A", 1],
    ["E", 1],
    ["I", 1],
    ["L", 1],
    ["N", 1],
    ["O", 1],
    ["R", 1],
    ["S", 1],
    ["T", 1],
    ["U", 1],
  ])('calculates the score for %i + %i as %i', (a, expectedScore) => {
    expect(calculateScrabbleScore(a)).toBe(expectedScore);
  });