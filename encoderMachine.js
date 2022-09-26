const prompt = require("prompt-sync")({ sigint: true });

class EncoderMachine {
  constructor(charList = createNoWhiteSpaceString()) {
    this.inputStringInArrayform = charList;
  }

  getUserInputString() {
    return this.inputStringInArrayform;
  }

  getUniqueCharList() {
    const uniqueCharList = this.inputStringInArrayform.filter(
      (char, index) => this.inputStringInArrayform.indexOf(char) === index
    );
    return uniqueCharList;
  }

  countEachUniqueCharList(userInputString, uniqueCharList) {
    let countedCharList = createCountableList(uniqueCharList);
    countedCharList.forEach((uniqueChar) => {
      userInputString.forEach((char) => {
        if (uniqueChar.char === char) {
          uniqueChar.count += 1;
        }
      });
    });
    return countedCharList;
  }

  getEncodedString(countedCharList) {
    const encodedList = genEncodedList(countedCharList);
    const encodedString = encodedList.join("");
    return encodedString;
  }
}

function getUserInput() {
  const inputString = prompt("please input your string to encoded.");
  return inputString;
}

function trimString(string) {
  return string.trim();
}
function genCharList(string) {
  return string.split("");
}
function filterWhiteSpace(charList) {
  return charList.filter((char) => char !== " ");
}
function createNoWhiteSpaceString() {
  const string = getUserInput();
  const trimedString = trimString(string);
  const charListWithWhiteSpace = genCharList(trimedString);
  const charListNoWhiteSpace = filterWhiteSpace(charListWithWhiteSpace);
  return charListNoWhiteSpace;
}

function createCountableList(uniqueCharList) {
  return uniqueCharList.map((char) => ({
    char: char,
    count: 0,
  }));
}

function genEncodedList(countedCharList) {
  return countedCharList.map((char) => char.char + char.count);
}

module.exports = { EncoderMachine };
