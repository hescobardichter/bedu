import { sum, divide, multiply, min } from '../operators'


const numberHigh = (a, b) => {
    if(a > b){
        return true;
    }
    return false;
}

describe('Test de operators',  () => {
    test('sum to be', () => {
        const input  = sum(1, 2);
        const output = 3;
        expect(input).toEqual(output)
    })
    test('min to be', () => {
        const input  = min(3, 1);
        const output = 2;
        expect(input).toBe(output)
    })
    test('multiply to be', () => {
        const input  = multiply(3, 10);
        const output = 30;
        expect(input).toBe(output)
    })
    test('divide to be', () => {
        const input  = divide(10, 2);
        const output = 5;
        expect(input).toBe(output)
    })
    test('sum to be high', () => {
        const input  = sum(6, 2);
        const output = 3;
        expect(numberHigh(input, output)).toBe(true)
    })
});
