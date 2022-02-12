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
//создаем новый моссив всех имен студентов при помощи метода map(метод для преобразования)

//определение: это метод массива, который вернет преобразованный массив исходного массива, количество элементов в массиве будет
// совпадать с результирующим массивом, с помощью колбек функции.

console.log(students.map(s=>s.name))
//конструкция ниже имитирует работу метода map
console.log(myMap(students, s=> s.name))
function myMap(array, callback) {
    const newArr = []
    // newArr[0]=callback(array[0])
    // newArr[1]=callback(array[1])
    // newArr[2]=callback(array[2])
    // newArr[3]=callback(array[3])
    for (let i = 0; i < array.length ; i++) {
        newArr[i]=callback(array[i])
    }
    return newArr
}
console.log(students.filter(s=>s.scores>=100))
console.log(myFilter(students, s=>s.scores>=100))
function myFilter(array, callback) {
    const newArr1 = []

    for (let i = 0; i < array.length ; i++) {
        callback(array[i])? newArr1.push(array[i]) : null
    }

    return newArr1
}
// function myFilter(array, callback) {
//     const newArr1 = []
//
//     for (let i = 0; i < array.length; i++) {
//мы бежим по массиву, сравниваем результат, если true, то добавляем(push) в новый массив
//        if (callback(array[i])===true){
//            newArr1.push(array[i])
//     }
//
//     return newArr1
// }
//таким образом метод фильтр возвращает новый массив, элементы которого удовлетворяют условиям фильтрации
console.log(students.find(s=>s.name ==="Bob"))
//метод find (фабричный) принимает коллбек и помогает нам найти первый элемент удовлетворяющий поиск
console.log(myFind(students, s=>s.name ==="Bob"))
function  myFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])===true){
           return array[i]
        }
    }
}