//TAB 1: Only Odds
    //Create an empty array
    //Iterate through the list of numbers using a for loop
    //If the number at list[index] is not even, add it to the empty array using .push

//test1
const arrayToFill = [];
const inputArray = [2, 4, 6, 8, 11, 20, 15, 22];
for (let i = 0; i < inputArray.length; i++) {
         if (inputArray[i] % 2 !== 0)
         arrayToFill.push(inputArray[i]);          
}

console.log(arrayToFill)

//test2
const newArray = [];
const inputArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for (initialization; condition; afterthought)

for (let i = 0; i < inputArray1.length; i++) {
    if (inputArray1[i] % 2 !== 0)
    newArray.push(inputArray1[i])

}
console.log(newArray)

//test3
const inputArray2 = [70, 42, 55, 81, 21, 91, 34];
const newArray2 = [];
let i = 0; 
while (++i < inputArray2.length) {
    if (inputArray2[i] % 2 !== 0)
    newArray2.push(inputArray2[i]);
}

console.log(newArray2)


//Tab2: Vowel vs Consonant
    //create 2 variables to track count of vowels and consonants. count = 0 
    //iterate through letters using for loop 
    //if letter is vowel, add vowel count
    //if letter is consonant, add consonant count
    //then console.log "word has # vowels and # consonants"

//word1 
const word = "hello";

let vowel_count = 0;
let const_count = 0;
for (let i = 0; i < word.length; i++) {
    if (word[i] === "a" ||
        word[i] === "e" ||
        word[i] === "i" ||
        word[i] === "o" ||
        word[i] === "u")
     { vowel_count++;}
     else {const_count++}
} 

console.log(word + " has " + vowel_count + " " + "vowels and " + const_count + " "  + "consonants.") 

