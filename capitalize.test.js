import { capitalize } from "./capitalize.js";

test('abc to equal ABC',()=>{
    expect(capitalize('abc')).toMatch(/ABC/);
});