/*import {readFile} from "node:fs/promises";
async function main(){
  let filePath="C:/Users/91702/Desktop/WPT MODULE/programs/day/package.json"
  let fileData= await readFile(filePath, {encoding: "utf-8"});
  console.log(fileData);

}
main();*/


import {writeFile} from "node:fs/promises";

async function main(){
let filePath="C:/Users/91702/Desktop/file.txt";
let fileData=`If you are the developer of this app, ensure 
that your Dynamic Links domain is correctly configured and 
that the path component of this URL is valid.`;
await writeFile(filePath, fileData); 
console.log("write sucess");}
main();