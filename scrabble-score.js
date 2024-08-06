export function calculateScrabbleScore(word) {
    // Convert the word to uppercase to handle case-insensitivity
    const wordToLetters = word.toUpperCase().split('');

    let score = 0;
    wordToLetters.forEach(letter => {
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
/*    switch(word) {
        case 'A': score = 1
        break;
        case 'E': score = 1
        break;
        case 'I': score = 1
        break;
        case 'L': score = 1
        break;
        case 'N': score = 1
        break;
        case 'O': score = 1
        break;
        case 'R': score = 1
        break;
        case 'S': score = 1
        break;
        case 'T': score = 1
        break;
        case 'U': score = 1
        break;
        case 'D': score = 2
        break;
        case 'G': score = 2
        break;
        case 'C': score = 3
        break;
        case 'B': score = 3
        break;
        case 'M': score = 3
        break;
        case 'P': score = 3
        break;
        case 'F': score = 4
        break;
        case 'H': score = 4
        break;
        case 'V': score = 4
        break;
        case 'W': score = 4
        break;
        case 'Y': score = 4
        break;
        case 'K': score = 5
        break;
        case 'J': score = 8
        break;
        case 'X': score = 8
        break;
        case 'Q': score = 10
        break;
        case 'Z': score = 10
        break;
        default: console.log("Error, not a valid letter")
    }

 */
// store a score so if letter === letter give x points
// accumulate points
// output the final score