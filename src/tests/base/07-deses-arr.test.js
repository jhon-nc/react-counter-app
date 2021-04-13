import '@testing-library/jest-dom';
const { retornaArreglo } = require("../../base/07-deses-arr")

describe('Pruebas en desestructuracion', () => {
    test('Debe de retornar un string y un numero', () => {
        // 1. const arr = retornaArreglo(); // = ['ABC',123];
        const [letras,numeros] = retornaArreglo(); 
        
        // 1. expect(arr).toEqual(['ABC',123]);
        // typeof para señalar el tipo de constante
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');


    })
    
})
