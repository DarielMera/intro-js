// remember this file is name index. in Js, html etc is the default 
// if i run node index.js wiill open this file but also if i do node .(dot) by definition it opens it


// function findMaxNumber (arr){
//     let biggestNum = arr[0] // set initially to first num of array
//     for (let num of arr) { // loop through each number of array

//         if (num > biggestNum){
//             biggestNum = num
//         }

//     }

// console.log(biggestNum)

// }

// how to start loop at 1; this way is a little less expensive

function findMaxNumber (arr){
    let biggestNum = arr[0] // set initially to first num of array
    for (let i=0; i < arr.length; i++) { // loop through each number of array

        if (arr[i] > biggestNum){
            biggestNum = arr[i]
        }

    }

    console.log(biggestNum) 
    // option and hit down arrow i can move a line
    // opt + shift will dupllicate the highlited line
    // command + x will delete a complete line
    
}

findMaxNumber([1,2,3,4,5,6,8,1,7])

const ages = [37, 48, 30, 22, 17, 25, 19, 24, 21, 20, 27, 32, 33, 45]

findMaxNumber(ages)