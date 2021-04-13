import '@testing-library/jest-dom';
const { getHeroeById, getHeroesByOwner } = require("../../base/08-imp-exp");
const { default: heroes } = require("../../data/heroes");

describe('Pruebas en funciones de heroes', () => {
    test('Debe de retonar un id de heroe', () => {
        const id=1;
        const heroe=getHeroeById(id);
        //console.log(heroe);

        const heroeData= heroes.find(h=>h.id===id);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe de retonar undefined si heroe no existe', () => {
        const id=10;
        const heroe=getHeroeById(id);
        //console.log(heroe);

        expect(heroe).toBe(undefined);
    });

    // debe de retornar un arreglo con los heroes de DC
    // crear const owner
    // toEqual al arreglo filtrado
    test('debe de retornar un arreglo con los heroes de DC', () => {
        const owner='DC';
        const heroedc=getHeroesByOwner(owner);

        const heroeDataDC= heroes.filter(h=>h.owner===owner);

        expect(heroedc).toEqual(heroeDataDC);
        //console.log(heroedc,heroeDataDC);
    })
    
    // debe de retornar un arreglo1 con los heroes de MARVEL
    //legth=2
    test('debe de retornar un arreglo con los heroes de DC', () => {
        const owner='Marvel';
        const heroemarvel=getHeroesByOwner(owner);

        expect(heroemarvel.length).toBe(2);
        //console.log(heroemarvel,heroeDataMARVEL);
    })
    
})
