import { fireEvent, render,screen } from '@testing-library/react';
import { AddCategory } from '../../src/component/AddCategory';

describe ("Pruebas en <AddCategory>", () => {

    test("Debe cambiar el valor de la caja de texto", () =>{

        render( <AddCategory addCategories = { ()=>{} } /> );//crear sujeto de pruebas

        const input = screen.getByRole('textbox');//obtener el input

        //disparar el evento input, recibe ela entrada del input que tiene la imagen
        //el segunto argumento recib eel target con el valor saitama
        fireEvent.input(input, { target:{value: 'Saitama'}});
        expect(input.value).toBe('Saitama');
    });

    test('Debe llamar addCategories si el input tiene un valor', () => {

        const inputValue = 'Saitama';//lo que tendra la caja de texto
        const addCategories = jest.fn();

        render( <AddCategory addCategories = {addCategories} /> );//levantar sujeto de pruebas y le envio la funcion que pide

        //Extraer referencias
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //disparar eventos
        fireEvent.input(input, {target: {value: inputValue}});//simular evento de entrada
        fireEvent.submit(form);//simular el comportamiento de enviar un formulario

        expect(input.value).toBe('');//se espera igual a vacio por que despeus de aplicar el metodo submit se setea el input text

        expect(addCategories).toHaveBeenCalled();//se espera que la funcion halla sido llamada
        expect(addCategories).toHaveBeenCalledTimes(1);
        expect(addCategories).toHaveBeenCalledWith( inputValue );//evalua si esta llamando on el valor de la caja de texto
    });

    test('No Debe llamar addCategories si el input esta vacio', () => {

        const addCategories = jest.fn();

        render( <AddCategory addCategories = {addCategories} /> );//levantar sujeto de pruebas y le envio la funcion que pide

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(addCategories).toHaveBeenCalledTimes(0);
        expect(addCategories).not.toHaveBeenCalled();
    });

    
});