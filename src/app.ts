import * as fs from "fs";
const fileContents = fs.readFileSync("kjb.txt", "utf8") as string;

const charCount = {} as { [key: string]: number };
var maxCount = 0;
var maxChar = "";
for (const char of fileContents) {
  if (!charCount[char]) {
    // check if new char
    charCount[char] = 1;
  } else {
    // if not new, increment count of that char by 1
    charCount[char]++;
  }
  if (charCount[char] > maxCount) {
    // track maximum count and char
    maxCount = charCount[char];
    maxChar = char;
  }
}

console.log("' " + maxChar + " '" + "count: " + maxCount);
console.log("done");
