/* HW- fall cohort: week 1 day 2
Homework will help you practice loops, arrays, objects, and functions.

1. Create a function that returns the number of true values there are in an array.

const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]


2. Write a function that receives a car object as an argument and outputs the cars make and model. 


3.  Write a function to get the first element in an array */ // shift + option + A

let arrBool = [true, false, false, true, false, false, false, true, true, true, false]


// USING ---- FOR OF -----
/* function returnTrueBoolean() {
    let counter = 0;
    for (trueValue of arrBool) {
        if (trueValue) {
            counter++;

        }
    }
    console.log(counter)

}

returnTrueBoolean();
 */



// USING ---- FOR IN -----
/* function returnTrueBoolean() {
     let total = 0;
        for (i in arrBool){
          arrBool[i] ? total++ :  undefined
     }
     console.log(total)
 }

 returnTrueBoolean();
 */

 // USING ---- FOR CLASSIC LOOP -----
function returnTrueBoolean() {

    let total = 0;
    for (let i=0; i < arrBool.length; i++ ) {
         arrBool[i] ? total++ :  undefined
    console.log(total)
}

returnTrueBoolean()
