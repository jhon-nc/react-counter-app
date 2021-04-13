describe('Pruebas en el archivo demo.test.js', () => {
  
    test('1ra prueba, deben de ser iguales los string', () =>{
    
        //1. inicio
        const mensaje1 = 'Hola mundo';

        //2. estimulo
        const mensaje2 = `Hola mundo`;

        //3. observar el comportamiento
        expect(mensaje1).toBe(mensaje2);
    })  
})