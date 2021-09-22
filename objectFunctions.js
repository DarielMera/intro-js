const students = [{
    firstName: 'alina',
    lastName: 'Maliuk',
    age: 33,
    gender: 'female',
}, {
    firstName: 'dariel',
    lastName: 'mera',
    age: 32,
    gender: 'male',
}, {
    firstName: 'khystofer',
    lastName: 'gil',
    age: 30,
    gender: 'male',
}, {
    firstName: 'gaby',
    lastName: 'taylor',
    age: 22,
    gender: 'female'
}]

function returnsFullName(person){
const fullName = `${person.firstName} ${person.lastName} `
console.log(fullName)
}

for (let i = 0; i<students.length; i++ )
returnsFullName(students[i])