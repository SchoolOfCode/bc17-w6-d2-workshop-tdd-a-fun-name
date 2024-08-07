import {calculateScrabbleScore} from "./scrabble-score";
import {test, expect} from "vitest";


//calculate the score of a single input ✅
// test('test 1', () =>{
//     expect(calculateScrabbleScore("A")).toBe(1)
// })

// test each letter
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
    ["D", 2],
    ["G", 2],
    ["B", 3],
    ["C", 3],
    ["M", 3],
    ["P", 3],
    ["F", 4],
    ["H", 4],
    ["V", 4],
    ["W", 4],
    ["Y", 4],
    ["K", 5],
    ["J", 8],
    ["X", 8],
    ["Q", 10],
    ["Z", 10],
])('calculates the score for %s as %i', (letter, expectedScore) => {
    expect(calculateScrabbleScore(letter)).toBe(expectedScore);
});

//test some dummy words
test.each([
    ["dilly", 9],
    ["hello", 8],
    ["zebra", 16],
])('calculates the score for %s as %i', (word, expectedScore) => {
    expect(calculateScrabbleScore(word)).toBe(expectedScore);
});

// Input validation
//enter valid character
    test.each([
        ['dilly123', 'Enter a valid word containing only alphabetic characters'],
        ['@#$', 'Enter a valid word containing only alphabetic characters'],
        ['hello', 8],
        ['zebra', 16],
    ])('should handle input %s and expect %s', (word, expected) => {
        if (typeof expected === 'string') {
            // Check if function throws an error with the expected message
            expect(() => calculateScrabbleScore(word)).toThrow(expected);
        } else {
            // Check if function returns the expected score
            expect(calculateScrabbleScore(word)).toBe(expected);
        }
});
