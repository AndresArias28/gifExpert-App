import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/component/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs')//hacer un mock completo de este path

describe('Pruebas en <GifGrid />', () => {
    
    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
         
        render( <GifGrid categoria={ category } /> );
        expect( screen.getByText( 'Cargando...' ) );
        //screen.debug();
        expect( screen.getByText( category ) );

    });

    test('Debe mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

        const gifs = [
            {
                id:'add',
                title: 'goku',
                url: 'http://loclhost/goku.jpg'
            },
            {
                id:'123ds',
                title: 'vegueta',
                url: 'http://loclhost/vegueta.jpg'
            },
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid categoria={ category } /> );
        expect(screen.getAllByRole('img').length).toBe(2);

    });

});
    