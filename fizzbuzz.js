// 50 

/*
up to 50
use modulos 6%3 = 0 
use modulos i % 3 = 0 fizz 
use modulos i % 5 = 0
if statement
use ! not equal
if import {  } from "module";
if divisible by 3 we do fizz 
if divisible by 5 we do buzz
if divisible by both then fizzbuzz
*/


var list = [];
function fizzfuzz() {
    for (let i = 1; i < 50; i++) {
        if (i % 3 === 0) {
            list.push("Fizz")
            // console.log("fizz")
        } else if (i % 5 === 0) {
            list.push("buzz")
            // console.log("buzz")
        } else if (i % 3 === 0 && i % 5 === 0) {
            list.push("fizzbuzz")
            // console.log("fizzbuzz")
        } else {
            list.push(i)
            // console.log(i)
        }
    }
}

 fizzfuzz()
console.table(list)
