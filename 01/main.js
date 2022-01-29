//в JS есть две большие группы типов данных: объекты и примитивы.
//объекты: массивы, функции, объекты(array, function, object)
//объекты от примитивов отличаются 1)объекты более сложная структура,
// может содержать внутри себя другие вложенные значения(примитивы) или объекты
//2) данные хранятся в объекте в виде пары ключ:значение
//3) объекты передаются по ссылке(ссылочный вид данных)

const num1 = 6
const num2 = 6
console.log(num1===num2) //true

const hey1 = {}
const hey2 = {}  // <- в переменной лежит ссылка на ячейку памяти в которой хранится этот объект
console.log(hey1===hey2) //false потому, что сравниваются два разных объекта, у каждого своя ссылка н ячейку памяти

const user = {
    name: "Bob",
    age: 33
}
//user.name="Alex"- так делать не хорошо, мы теряли прежнее значение
// и не понимаем былили изменения в объекте user
//Для внесения изменений в объект в современном синтаксисе используется
// специальный символ ... спредоператор
const copyUser = {...user}
copyUser.name="Alex"

console.log(user===copyUser)//false все равно даже если данные одинаковы объекты не равны

//меняем данные
//1. делаем копию
//2. вносим изменения в копию
//3. работаем дальше с копией
const friends = ["Bob", "Alex", "Anna"]
//создаем новый массив
const copyFriends = [...friends]

console.log(friends===copyFriends)//false т.к. массивы тоже объекты, в них тоже ссылочный вид данных
//если внутри объекта лежат вложенные данные типа объекты или массивы,
//1)можем сделать копию, поверхностную без учета вложенности
//2) глубокую копию смотри ниже на 48 строчке
const megaUser={
    name: "Bob",
    age: 33,
    friends : ["Bob", "Alex", "Anna"]
}
const copyMegaUser = {...megaUser}

const deepCopyMegaUser = {...megaUser, friends:[...megaUser.friends]}
//map c использование современного синтаксиса шаблонных строк ``

const greetings = friends.map(f=>`Hi: My name is ${f}`)
console.log(greetings)

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 120
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 89       //+10
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
]

console.log(students.map(s=>s.name))
console.log(students.map(s=>`Hi: My name is ${s.name}`))
// метод map будем использовать для создания копии
 const copyStudents = students.map(s => s)//сделали поверхностную копию
const deepCopyStudents = students.map(s => ({...s}))//1вариант полной копии
const deepCopyStudents = students.map(s=>{
    return {...s}
    }
)//2 вариант глубокая полная копия

console.log(students.map(s=>{
    if(s.name==="Nick"){
        return{...s, scores: s.scores +10}
        else{
            return s
        }
    }
}))
console.log(students.map(s=>s.name==="Nick" ? {...s, scores: s.scores+10}:s))
