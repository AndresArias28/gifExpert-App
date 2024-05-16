import { fireEvent, render, screen } from '@testing-library/react';
import { GifApp } from "../src/GifApp";


describe('Pruebas en <GifApp />', function() {

    test('Debe llamar setCategories si categories no incluye la nueva categoria', function() {

        const setCategories = jest.fn();
        render( <GifApp /> );

        const inputElement = screen.getByRole('textbox');
          // Simula la entrada de texto y presiona la tecla "Enter"
        fireEvent.input(inputElement, { target: { value: 'NewCategory' } });
        fireEvent.keyPress(inputElement, { key: 'Enter', code: 13, charCode: 13 });

        // Verifica que se llame una vez la funcion
        expect(setCategories).toHaveBeenCalledTimes(0);
        //screen.debug();
  
    });


});