/*
JONATHAN SANCHEZ
DAY 2 
SEPT 21 2021
*/

// press shift + function + f to format the document

let BocaCodeInstructor = {
    firstName: 'Jonathan',
    lastname: 'Sanchez',
    city: 'Boca Raton',
    instructor_family: {
        wife: 'Claudia',
        d1: 'Mia',
        d2: 'Annalee',
        pets: ['🐥', '🐷', '🦊']
    }
}
// as soon as i type the name of the object vscode will make suggestions on the keys of the object
console.log('Instructor first name:' + BocaCodeInstructor.firstName)
console.log('Instructor Full name:' + BocaCodeInstructor.firstName + ' ' + BocaCodeInstructor.lastname)

// create an object for family and put my family in it

let myFamily = {
    firstName: 'Dariel',
    lastname: 'Mera',
    city: 'Boca Raton',
    familyMembers: {
        wife: 'Natalie',
        sd1: 'Amanda',
        sd2: 'Isabella',
        pets: ['🐶'] // for emojies shortcut ctrl + cmd + spacebar
    }
}
console.log('Me and My Wife:' + myFamily.firstName + ' ' + myFamily.familyMembers.wife);
console.log('Dariels Wife, My Stepdaughter and Pet:' + myFamily.familyMembers.wife + " " + myFamily.familyMembers.sd1 + " " +  myFamily.familyMembers.pets[0])