//TAB 1: Only Odds
    //Create an empty array
    //Iterate through the list of numbers using a for loop
    //If the number at list[index] is not even, add it to the empty array using .push

//Array #1
const arrayToFill = [];
const inputArray1 = [2, 4, 6, 8, 11, 20, 15, 22];
for (let i = 0; i < inputArray1.length; i++)
         if (inputArray1[i] % 2 !== 0) {
            arrayToFill.push(inputArray1[i])           
} 

console.log(arrayToFill)


//Array #2 
const newArray = [];
const inputArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < inputArray2.length; i++) {
    if (inputArray2[i] % 2 !== 0)
    newArray.push(inputArray2[i])

}
console.log(newArray)

//Array #3
const inputArray3 = [70, 42, 55, 81, 21, 91, 34];
const newArray2 = [];
let i = 0; 
while (++i < inputArray3.length) {
    if (inputArray3[i] % 2 !== 0)
    newArray2.push(inputArray3[i]);
}

console.log(newArray2)

//Array #4 
const inputArray4 = [2, 4, 6, 8, 10, 11, 12] 
const newArray4 = [];

for (let i=0; i < inputArray4.length; i++) {
    if (inputArray4[i] % 2 !==0)
    newArray4.push(inputArray4[i])
}

console.log(newArray4)

//Tab2: Vowel vs Consonant
    //create 2 variables to track count of vowels and consonants.
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

console.log(word + " has " + const_count + " "  + "consonants and "+ vowel_count + " " + "vowels.") 

//word2
const word2 = "ukelele";

let vowel_count2 = 0;
let const_count2 = 0;

for (let i = 0; i < word2.length; i++) {
    if (word2[i] === "a" ||
        word2[i] === "e" ||
        word2[i] === "i" ||
        word2[i] === "o" ||
        word2[i] === "u")
     { vowel_count2++;}
     else {const_count2++}
} 

console.log(word2 + " has " + const_count2 + " "  + "consonants and "+ vowel_count2 + " " + "vowels.") 


//word3 
const word3 = "awesome";

let vowelCount3 = 0;
let constCount3 = 0;

for (let i = 0; i < word3.length; i++) {
    if (word3[i] === "a" ||
        word3[i] === "e" ||
        word3[i] === "i" ||
        word3[i] === "o" ||
        word3[i] === "u")
     { vowelCount3++;}
     else {constCount3++}
} 

console.log(word3 + " has " + constCount3 + " "  + "consonants and "+ vowelCount3 + " " + "vowels.") 


//word4 
const word4 = "onomonopia";

let vowelCount4 = 0;
let constCount4 = 0;

for (let i = 0; i < word4.length; i++) {
    if (word4[i] === "a" ||
        word4[i] === "e" ||
        word4[i] === "i" ||
        word4[i] === "o" ||
        word4[i] === "u") 
        {vowelCount4++} 
        else {constCount4++}
}

console.log(word4 + " has " + constCount4 + " "  + "consonants and "+ vowelCount4 + " " + "vowels.") 


//word5
const word5 = "textbook";

let vowelCount5 = 0;
let constCount5 = 0;

for (let i = 0; i < word5.length; i++) {
    if (word5[i] === "a" ||
        word5[i] === "e" ||
        word5[i] === "i" ||
        word5[i] === "o" ||
        word5[i] === "u") 
        {vowelCount5++} 
        else {constCount5++}
}

console.log(word5 + " has " + constCount5 + " "  + "consonants and "+ vowelCount5 + " " + "vowels.") 



//Tab 3: Reverse Array 
    //create empty array 
    //iterate through input array backwards 
    //add last to first number in empty array


//Array1 
const reverse_array = [];
const nums = [1, 2, 3]; 

for (let i = nums.length - 1; i >= 0; i--) {
    reverse_array.push(nums[i]);
}

console.log(reverse_array)


//Array2
const reverse_array1 = [];
const nums1 = [1, 3, 5, 7, 9, 11];

for (let i = nums1.length - 1; i >= 0; i--) {
    reverse_array1.push(nums1[i]);
}

console.log(reverse_array1)


//Array3 
const newList = [];
const numbers = [20, 50, 30, 60, 200];

for (let i = numbers.length - 1; i >=0; i--) {
    newList.push(numbers[i])
}

console.log(newList)


//Array4 
const newList2 = [];
const numbersList = [1, -1, 2, -3, 5, -8, 13];

for (let i = numbersList.length - 1; i >= 0; i--) {
    newList2.push(numbersList[i])
}

console.log(newList2)



//Tab 4: FizzBuzz
    //Create an array with numbers 1-100
        //for loop - start with 1 increment until 100. 
    //iterate through 1 to 100 
        //for loop again 
    //if num is mutiple of 3, print "Fizz"
    //else if num is multiple of 5, print "Buzz"
    //else if multiples of both, print "FizzBuzz"
    //else print just the number 


const one_to_100 = []
    for (number = 1; number <=100; number++) {
        one_to_100.push(number)
        } 
// console.log(one_to_100)

const Fizz_Buzz = []
    for (let i = 1; i <= one_to_100.length; i++){
        if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 == 0) {
            console.log("Buzz")
        } else if (i % 3 === 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        } else {console.log(i);} {
            Fizz_Buzz.push(i)
        }
    }
    
console.log(Fizz_Buzz)
