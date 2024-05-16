import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', function() {

  test('Debe regresar el estado inicial', function() {

    const { result } = renderHook( () => useFetchGifs('One Punch') );//simular el hook y desestrucutra la propiedad result, que es el resultado despues de activiar el hook
    const { images, isLoading } = result.current;//result trae un objeto: { current: { images: [], isLoading: true } } , lo fijo y desestrucutro 

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();

  });

  test('Debe retrornar un arreglo de imagenes y  isloading en false', async() => {

    const { result }  = renderHook( () => useFetchGifs('One Punch') );
    
    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan( 0 )//esperar hasta que el resultado sea > 0
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();

  }); 
});
