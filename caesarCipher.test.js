import { caesarCipher } from "./caesarCipher";
test('Encrypt abc with caesarCipher shift of 3 to produce xyz',()=>{
    expect(caesarCipher('xyz',3)).toMatch('abc');
});
test('Preserve Case HeLLo with shift of 3 to produce KhOOr',()=>{
    expect(caesarCipher('HeLLo',3)).toMatch('KhOOr');
});
test('Non-alphabetical characters remain unchanged',()=>{
    expect(caesarCipher('Hello, World!', 3)).toMatch('Khoor, Zruog!');
})