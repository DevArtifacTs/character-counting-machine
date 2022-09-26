const { EncoderMachine } = require("./encoderMachine");

const enCoderMachine = new EncoderMachine();

console.log("enCoderMachine", enCoderMachine);

const userInputString = enCoderMachine.getUserInputString();
console.log("userInputString: ", userInputString);

const uniqueCharList = enCoderMachine.getUniqueCharList();
console.log("uniqueCharList", uniqueCharList);

const countedUniqueChar = enCoderMachine.countEachUniqueCharList(
  userInputString,
  uniqueCharList
);
console.log("countedUniqueChar: ", countedUniqueChar);

const encodedString = enCoderMachine.getEncodedString(countedUniqueChar);
console.log("encodedString: ", encodedString);
