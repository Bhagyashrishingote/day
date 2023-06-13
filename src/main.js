/* async function sum(n1,n2){
  return n1+n2;
}
let op=sum(1,1);
console.log(op);  */

/*async function hello(){
 console.log("hello 1");
}
hello();

console.log("hello 2");

console.log("hello 3");         

/*function hello(){
 console.log("hello 1");
}
console.log("hello 2");
hello();
console.log("hello 3"); */

/*function hello(){
 console.log("hello 1");
}
console.log("hello 2");
hello();
console.log("hello 3"); */

/*async function sum(n1,n2){
  return n1+n2;
}
let result=sum(8,1);
console.log(result) ;             /*op-> promice{2}*/

async function sum(n1,n2){
  return n1+n2;
}
async function main(){
let result = await sum(1,3);
console.log(resilt) 
}
main();