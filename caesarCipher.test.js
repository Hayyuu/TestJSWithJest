test('Encrypt abc with caesarCipher shift of 3 to produce xyz',()=>{
    expect(caesarCipher('abc',3)).toMatch('xyz');
});
test('Preserve Case HeLLo with shift of 3 to produce KhOOr',()=>{
    expect(caesarCipher('HeLLo',3)).toMatch('KhOOr');
});
test('Non-alphabetical characters remain unchanged',()=>{
    expect(caesarCipher('Hello, World!', 3)).toMatch('Khoor, Zruog!');
})