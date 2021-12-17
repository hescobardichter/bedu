import { compact } from './../compact'

const arrayEmpty = (array) => {
    if(array.length == 0){
        return true;
    }
    return false;
}

describe('Test de compact',  () => {
    test('array empty', () => {
        const input = compact([]);
        const output = "Array can not be empty";
        expect(input).toThrow(output);
    })
    test('it remove falsy values', () => {
        const input  = [1,2,false,3,''];
        const output = [1,2,3];
        expect(compact(input)).toEqual(output)
    })
});