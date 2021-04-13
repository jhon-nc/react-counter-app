import '@testing-library/jest-dom';
const { getUser } = require("../../base/05-funciones")
const { getUsuarioActivo } = require("../../base/05-funciones")

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    
    })
    // Tarea: getUsuarioActivo debe de retornar un objeto
    test('Tarea getUsuarioActivo', () => {

        const nombre='Jhon';
        const user=getUsuarioActivo(nombre);

        const userTest = {
            uid: 'ABC567',
            username: nombre    
        }

        expect (user).toEqual(userTest);
    })
    
    
})
