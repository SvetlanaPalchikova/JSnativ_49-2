import {calculatorReducer, div, mult, sub, sum} from "./tasks";

test ("sum", ()=>{
    //тестовые данные
    const  state =10
    const num = 5
    //выполняем теструемый код
    const result = sum(state, num)
    //проверяем полученный результат
    expect(result).toBe(15)
})
test('sub', ()=>{
  expect(sub(10, 5)).toBe(5)
})

test('div', ()=>{
    expect(div(10, 5)).toBe(2)
})

test('mult', ()=>{
    expect(mult(10, 5)).toBe(50)
})


test("sum of number with calculatorReduсer", ()=>{
    expect(calculatorReducer(3, {type:"SUM", num: 5})).toBe(3)
})

test("sub of number with calculatorReduсer", ()=>{
    expect(calculatorReducer(5, {type:"SUB", num: 3})).toBe(2)
})
test("div of number with calculatorReduсer", ()=>{
    expect(calculatorReducer(6, {type:"DIV", num: 3})).toBe(2)
})
test("mult of number with calculatorReduсer", ()=>{
    expect(calculatorReducer(5, {type:"MULT", num: 3})).toBe(15)
})