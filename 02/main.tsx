let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85 // +10
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
]

function getStudentName(item, i) {
    return `Index${1}: ${item.name}.`
}

const map = (array, callback) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i], i)
    }
    return newArray
}


console.log(students.map(getStudentName))
console.log(map(students, getStudentName))

console.log(students.map(s => s))//поверхностная копия
console.log(students.map(s =>( {...s})))//Глубокая копия
console.log(students.map(s => s.name ==="Bob"? {...s, scores: s.scores +10} : s))


const filterIt = (array, callback) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
       if(callback(array[i]) === true) {
           newArray.push(array[i])
        }
    }
    return newArray
}

console.log(students.filter(s => s.scores >=150))
console.log(filterIt(students,s => s.scores >=50))

const findIt = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            return array[i]
        }
    }
}

console.log(students.find(s=>s.name === "Bob"))
console.log(findIt(students,s => s.name === "Bob"))