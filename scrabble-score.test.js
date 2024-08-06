import { calculateScrabbleScore } from "./scrabble-score";
import {test, expect} from "vitest";


//calculate the score of a single input
test('test 1', () =>{
    expect(calculateScrabbleScore("a")).toBe(1)
})

