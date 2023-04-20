import * as fs from "fs";
const getFileContents = (fileName: string): string =>
  fs.readFileSync(fileName, "utf8") as string;

interface ReturnType {
  [key: string]: number;
}

const getCharCount = (fileContents: string): ReturnType => {
  const charCount = {} as ReturnType;
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
  try {
    for (let i = 0; i < nums.length; i++) {
      var complement = target - nums[i];
      if (map.has(complement)) return [map.get(complement), i];
      map.set(nums[i], i);
    }
  } catch (e) {
    if (e instanceof TypeError) return [];
  }
  return [];
}

function testTwoSum(testCase: Map<number[], number>) {
  var result = new Array();
  for (const [nums, target] of testCase) {
    result.push(twoSum(nums, target));
  }
  if (result.includes(false) || result.includes(undefined)) {
    console.log("Failed twosum test cases");
  } else {
    console.log("Passed twosum test cases");
  }
}

const twoSumTestCase = new Map<number[], number>();
twoSumTestCase.set([2, 7, 11, 15], 9); // [first, inner]
twoSumTestCase.set([3, 2, 4], 6); // [inner, last]
twoSumTestCase.set([3, 3], 6); // [0, 1] only two items in list
twoSumTestCase.set([3, 2, 3], 6); // [first, last]
twoSumTestCase.set([4, 0, 0, 3], 0); // [inner, inner] and target of 0
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
twoSumTestCase.set(null, []); // null case
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
twoSumTestCase.set("", []); // empty string case
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
twoSumTestCase.set("121", []); // string case with numbers

testTwoSum(twoSumTestCase);

function isPalindrome(x: number) {
  try {
    const str = x.toString().split("").join("");
    const strReverse = x.toString().split("").reverse().join("");
    return str === strReverse;
  } catch (e) {
    if (e instanceof TypeError) return false;
  }
}

function testIsPalindrome(paliTestCases: Map<number, boolean>) {
  var results = new Array();
  for (const [x, expected] of paliTestCases) {
    results.push(isPalindrome(x) === expected);
  }
  if (results.includes(false) || results.includes(undefined)) {
    console.log("Failed pali test cases");
  } else {
    console.log("Passed pali test cases");
  }
}

const paliTestCases = new Map<number, boolean>();
paliTestCases.set(121, true); // three digit
paliTestCases.set(-121, false); // negative palindrome
paliTestCases.set(10, false); // two digit
paliTestCases.set(-10, false); // negative non palindrome
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
paliTestCases.set(null, false); // null case
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
paliTestCases.set("", true); // empty string
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
paliTestCases.set("121", true); // string of numbers
paliTestCases.set(1, true); // single digit
testIsPalindrome(paliTestCases);
