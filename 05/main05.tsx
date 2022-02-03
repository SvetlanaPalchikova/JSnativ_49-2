const names = [100, "Bob", "Юра@", "Alex", "Мария", "Юра", "Donald", "John", "bob", "Ann", "100",]
//отсортируем
console.log(names.sort())
//без дополнительных параметров метод sort  расставляет по порядку Юникода
const numbers = [100, 333, 2, 42, 9, 101, 3, 1010]//по возрастанию

// const compareFunc = (a,b)=>{
//     if(a<=b){         //если менять ничего не надо
//         return-1      //любое отр число
//
//     }else {           //менять надо
//         return 1      //любое положительное число
//     }
// }
const compareFunc = (a, b) => a - b//возвращает любое отрицательное или любое положтельное число
//если нужно не мутировать массив, то сортируем его копию
// console.log([...numbers].sort(compareFunc))
// // мутабельный метод массива
// console.log(numbers.sort(compareFunc).reverse())//реверс тоже работает мутабельно

const students = [
    {
        name: "bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
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
        scores: 121
    },
];
console.log(students.sort((a, b) => b.scores - a.scores))
console.log(students.sort((a, b) => a.name <= b.name ? -1 : 1))
console.log(students.sort((a, b) => a.name.toLowerCase() <= b.name.toLowerCase() ? -1 : 1))
//
for (let j = 0; j < numbers.length - 1; j++) {
    let isArraySorted = true
    for (let i = 0; i < numbers.length - 1 - j; i++) {
        if (numbers[i] > numbers[i + 1]) {
            isArraySorted = false;
                // let temp = numbers[i+1]
                // numbers[i+1]=numbers[i]
                // numbers[i]=temp
                [numbers[i + 1], numbers[i]] = [numbers[i], numbers[i + 1]]
        }
    }
    if (isArraySorted)break
}
console.log(numbers)