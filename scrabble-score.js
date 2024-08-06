export function calculateScrabbleScore(word) {
    switch(word) {
        case 'A': return 1
        break;
        case 'E': return 1
        break;
        case 'I': return 1
        break;
        case 'L': return 1
        break;
        case 'N': return 1
        break;
        case 'O': return 1
        break;
        case 'R': return 1
        break;
        case 'S': return 1
        break;
        case 'T': return 1
        break;
        case 'U': return 1
        break;
        case 'D': return 2
        break;
        case 'G': return 2
        break;
        case 'C': return 3
        break;
        case 'B': return 3
        break;
        case 'M': return 3
        break;
        case 'P': return 3
        break;
        case 'F': return 4
        break;
        case 'H': return 4
        break;
        case 'V': return 4
        break;
        case 'W': return 4
        break;
        case 'Y': return 4
        break;
        case 'K': return 5
        break;
        case 'J': return 8
        break;
        case 'X': return 8
        break;
        case 'Q': return 10
        break;
        case 'Z': return 10 
        break;
        default: console.log("Error, not a valid letter")

    }
}


// need to break the "word" to an array
// loop over array
// create a switch statement compare letter
// store a score so if letter === letter give x points
// accumulate points
// output the final score