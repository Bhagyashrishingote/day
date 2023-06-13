import {sum} from "./calc.js";
//import fs from "fs";
import {readFileSync} from "node:fs";
let filePath= "C:/Users/91702/Desktop/WPT MODULE/programs/day/package.json";
//let fileData=readFileSync(filePath);
let fileData=readFileSync(filePath, {encoding:"utf-8"});
console.log(fileData);

