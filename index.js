/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jello";

// Your code here...

// let indexOfString1 = 

let index;

for (let i = 0; i < string1.length; i++) {
    const currentLetter = string1[i];
    if (currentLetter === "j") {
        index = i;
    }
}

const indexOfString = string1.indexOf("j");

console.log ("The index of the letter J is ...", index);

console.log (indexOfString);


/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";

// Your code here...

const index1 = string2.indexOf("C");
const index2 = string2.indexOf("O");
const index3 = string2.indexOf("L");

const string2Cool = `${string2[index1]}${string2[index2]}${string2[index2]}${string2[index3]}`;

console.log(string2Cool);

/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";

// Your code here...

const stringRepeat = string3.repeat(4);

console.log(`${stringRepeat} Batman!`);


/*******************************************
       Iteration 4 | Fruite Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

// Your code here...

const chosenFruit = "mango";
const indexOfFruit = fruit.indexOf(chosenFruit);
const lenghtOfFruit = chosenFruit.length;
const lenghtOfFruit2 = lenghtOfFruit + indexOfFruit + 1;
const favoriteFruit = fruit.slice(indexOfFruit, lenghtOfFruit2);



console.log(indexOfFruit);
console.log(favoriteFruit);

/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";


// Check the first headline
// Your code here ...


const textCheck = funnyHeadline1.includes("oxygen");


if (textCheck === true) {
    console.log("The string includes the word 'oxygen'");
} else {
    console.log("The string does not include the word 'oxygen'");
}





// Check the second headline
// Your code here ...

const textCheck2 = funnyHeadline2.includes("oxygen");

if (textCheck2 === true) {
    console.log("The string includes the word 'oxygen'");
} else {
    console.log("The string does not include the word 'oxygen'");
}

/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEAWrTC9EgtxmK9w1";


// a) Print the string length
// Your code here ...

console.log("String length:", string4.length);


// b) Print the last character in the string
// Your code here ...

console.log("Last character:", string4[string4.length - 1]);
