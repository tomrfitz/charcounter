"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const getFileContents = (fileName) => fs.readFileSync(fileName, "utf8");
const getCharCount = (fileContents) => {
    const charCount = {};
    for (const char of fileContents) {
        if (!charCount[char]) {
            // check if new char
            charCount[char] = 1;
        }
        else {
            // if not new, increment count of that char by 1
            charCount[char]++;
        }
    }
    return charCount;
};
const getMaxChar = (charCount) => {
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
function getMostCommonChar(fileName) {
    return getMaxChar(getCharCount(getFileContents(fileName)));
}
let file = "kjb.txt";
const maxChar = getMostCommonChar(file);
console.log("The most common character in", file, "is", "'", maxChar, "'");
function twoSum(nums, target) {
    let map = new Map();
    try {
        for (let i = 0; i < nums.length; i++) {
            var complement = target - nums[i];
            if (map.has(complement))
                return [map.get(complement), i];
            map.set(nums[i], i);
        }
    }
    catch (e) {
        console.log(e);
    }
    return [];
}
function testTwoSum(testCase) {
    var result = new Array();
    for (const [nums, target] of testCase) {
        result.push(twoSum(nums, target));
    }
    if (result.includes(false) || result.includes(undefined)) {
        console.log("Failed twosum test cases");
    }
    else {
        console.log("Passed twosum test cases");
    }
}
const testCase = new Map();
testCase.set([2, 7, 11, 15], 9);
testCase.set([3, 2, 4], 6);
testCase.set([3, 3], 6);
testTwoSum(testCase);
function isPalindrome(x) {
    try {
        const str = x.toString().split("").join("");
        const strReverse = x.toString().split("").reverse().join("");
        return str === strReverse;
    }
    catch (e) {
        console.log(e);
    }
}
function testIsPalindrome(paliTestCases) {
    var results = new Array();
    for (const [x, expected] of paliTestCases) {
        results.push(isPalindrome(x) === expected);
    }
    if (results.includes(false) || results.includes(undefined)) {
        console.log("Failed pali test cases");
    }
    else {
        console.log("Passed pali test cases");
    }
}
const paliTestCases = new Map();
paliTestCases.set(121, true);
paliTestCases.set(-121, false);
paliTestCases.set(10, false);
paliTestCases.set(-101, false);
paliTestCases.set(null, false); // @ts-expect-error
testIsPalindrome(paliTestCases);
