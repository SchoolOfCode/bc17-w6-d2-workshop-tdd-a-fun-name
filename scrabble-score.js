export function calculateScrabbleScore(word) {
    // Convert the word to uppercase to handle case-insensitivity
    const wordToLetters = word.toUpperCase().split('');

    let score = 0;
    wordToLetters.forEach(letter => {
        // switch statement for each letter case
        switch (letter) {
            case 'A':
            case 'E':
            case 'I':
            case 'L':
            case 'N':
            case 'O':
            case 'R':
            case 'S':
            case 'T':
            case 'U':
                score += 1;
                break;
            case 'D':
            case 'G':
                score += 2;
                break;
            case 'C':
            case 'B':
            case 'M':
            case 'P':
                score += 3;
                break;
            case 'F':
            case 'H':
            case 'V':
            case 'W':
            case 'Y':
                score += 4;
                break;
            case 'K':
                score += 5;
                break;
            case 'J':
            case 'X':
                score += 8;
                break;
            case 'Q':
            case 'Z':
                score += 10;
                break;
            default:
                console.log("Error, not a valid letter");
                break;
        }
    });

    return score;
}

//console.log(calculateScrabbleScore('Dilly')); // Expected output: 9 (2+1+1+1+4)

// need to break the "word" to an array ✅
// loop over array ✅
// create a switch statement compare letter✅
// store a score so if letter === letter give x points✅
// accumulate points✅
// output the final score✅