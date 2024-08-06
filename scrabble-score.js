export function calculateScrabbleScore(word) {
    if(word === "A" || word === "E" || word === "I" || word === "L" || word === "N" ||word === "O" ||word === "R" ||word === "S" ||word === "T" ||word === "U"){
        console.log("Score returned: 1");
        return 1
    }
}


// need to break the "word" to an array
// loop over array
// create a switch statement compare letter
// store a score so if letter === letter give x points
// accumulate points
// output the final score