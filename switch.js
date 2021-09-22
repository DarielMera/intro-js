const fruit = 'kiwi'

switch (fruit) {
    case 'kiwi':
    case 'lime':
        console.log(fruit, 'is green')
        break
    
    case 'orange':
    case 'mandarine':
        console.log(fruit, 'is orange')
        break

    case 'banana':
        console.log(fruit, 'is yellow')
        break

    case 'apple':
    case 'strawberry':
        console.log(fruit, 'is red')    
        break

        default: 
        console.log('not sure what you talking about')
}

