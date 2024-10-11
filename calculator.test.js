import { Calculator } from "./calculator";
let calculator=new Calculator();

test('Add 2 to 3 to be 5',()=>{
    expect(calculator.add(2,3)).toBe(5);
});
test('Subtruct 2 from 3 to be -1',()=>{
    expect(calculator.subtruct(2,3)).toBe(-1);
});
test('Multiply 2 with 3 to be 6',()=>{
    expect(calculator.multiply(2,3)).toBe(6);
});
test('divide 2 to 0 to be NAN',()=>{
    expect(calculator.divide(2,0)).toBe(Infinity);
});