import { reverseString } from "./reverseString";

test('Reverse abc to equal cba',()=>{
    expect(reverseString('abc')).toMatch(/cba/);
})