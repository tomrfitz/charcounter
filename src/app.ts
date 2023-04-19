import * as fs from "fs";
const getFileContents = (fileName: string): string =>
  fs.readFileSync(fileName, "utf8") as string;

const getCharCount = (fileContents: string): { [key: string]: number } => {
  const charCount = {} as { [key: string]: number };
  for (const char of fileContents) {
    if (!charCount[char]) {
      // check if new char
      charCount[char] = 1;
    } else {
      // if not new, increment count of that char by 1
      charCount[char]++;
    }
  }
  return charCount;
};

const getMaxChar = (charCount: { [key: string]: number }): string => {
  let maxCount = 0;
  let maxChar = "";
  for (const char in charCount) {
    if (charCount[char] > maxCount) {
      // track maximum count and char
      maxCount = charCount[char];
      maxChar = char;
    }
  }
  return maxChar;
};

function getMostCommonChar(fileName: string): string {
  return getMaxChar(getCharCount(getFileContents(fileName)));
}

let file = "kjb.txt";
const maxChar = getMostCommonChar(file);

console.log("The most common character in", file, "is", "'", maxChar, "'");

function twoSum(nums: number[], target: number): number[] {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    var complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
  return [];
}

function isPalindrome(x: number): boolean {
  const str = x.toString().split("");
  const strReverse = x.toString().split("").reverse();
  console.log(str, strReverse);
  return str.join("") === strReverse.join("");
}
