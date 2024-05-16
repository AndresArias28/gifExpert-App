import {getGifs} from '../../src/helpers/getGifs';

describe('pruebas en getGifs', function() {

    test('Debe retornanar un arreglo de gifs', async() => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBeGreaterThan(0);//parecido a un assertions, en este caso espera que la longigitud del vector de gifs es mayor a 0
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });
})