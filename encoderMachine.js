const prompt = require("prompt-sync")({ sigint: true });

class EncoderMachine {
  constructor(charList = createNoWhiteSpaceString()) {
    this.inputStringInArrayform = charList;
    this.inputString = "";
  }
  getUserInputString() {
    console.log("aaa");
    // this.inputString = getUserInput();
  }

  echo() {
    return console.log("Echo!");
  }

  getCardNumber() {
    return this.cards.length;
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
function createNoWhiteSpaceString() {
  const string = getUserInput();
  const trimedString = trimString(string);
  const charListWithWhiteSpace = genCharList(trimedString);
  const charListNoWhiteSpace = charListWithWhiteSpace.filter((char) => !!char);
}

module.exports = { EncoderMachine };
