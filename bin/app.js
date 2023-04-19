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
console.log("The most common character in", file, "is", maxChar);
function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (map.has(complement))
            return [map.get(complement), i];
        map.set(nums[i], i);
    }
    return [];
}
function isPalindrome(x) {
    const str = x.toString().split("");
    const strReverse = x.toString().split("").reverse();
    console.log(str, strReverse);
    return str.join("") === strReverse.join("");
}
