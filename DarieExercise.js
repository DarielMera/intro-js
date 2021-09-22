// let darieArr = ['uno', 'dorian', 'dos', 'tres', 1, 2, 2, 123]
let fruits = ['kiwi','mango','dorian','loquat','jackruit','spanish lime', 'cotton candy grape', 'watermelon']


  function whereAreYou() {

    let lookForMe = 'loquat'

    for (let i = 0; i < fruits.length; i++) {

        if (fruits[i]===lookForMe) {
            console.log("here is your word" + "the index for your word is:" + i)
            console.log(fruits.splice(i, 1))
            console.log("now your array looks like this",  ...fruits)
            return
        }

        // (fruits[i] === lookForMe) ? console.log(i) : undefined

    }
}

 result = whereAreYou()
