/*#############################################################|
|                        STRINGS
*##############################################################*/

let pareto = "The Pareto principle states that, for many events, roughly 80% of the effects come from 20% of the causes.";

let trimMe = "#########         HELLO THERE         #########";

//slice
let getStates = pareto.slice(21,26);
console.log(getStates);

//replace
pareto = pareto.replace("Pareto", "Mcdonalds");
console.log(pareto);

// console.log(trimMe.replace("#","hello")); //it only replaces the first match!
console.log(trimMe.replace(/#/g,"").trim()); //it will replace globally and then trim the result

//length
console.log(pareto.length);

//check if a substring is present in the string
let isThereAPrincipleWord = pareto.indexOf('hello') > -1;
console.log(isThereAPrincipleWord);

//split the phrase
let splittedPhrase = pareto.split(",");
console.log(splittedPhrase);

//lets reverse the phrase and join everything together
let result = splittedPhrase
    .reverse()
    .join(",");
console.log(result);

//transforming text
let toUpper = splittedPhrase[0].toUpperCase();
console.log(toUpper);

let toLower = splittedPhrase[1].toLowerCase();
console.log(toLower);

