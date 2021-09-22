const fruits = ["kiwi", 'lime', 'apple', 'banana', 'orange', 'grapes']

// what fruit we get and how many are left
// FIFO - FIRST IN FIRST OUT......THIS IS QUEUE
// LIFO - LAST IN FIRST OUT.......THIS IS STACK

function getNextFruit(){
    const nextFruit = fruits.shift()
    console.log('you get a', nextFruit)
    console.log('There are', fruits.length, 'fruits left')
}

// this is called side effects 
// functions are not suppost to have side effects

const numLoops = fruits.length //6

for (let i=0; i < numLoops; i++){
    getNextFruit()
}





