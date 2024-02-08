/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getGifs} from '../helpers/getGifs';


export const useFetchGifs = (categoria) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsloading] = useState(true);//inicializar el estado de la variable isLoading con un valor de true

    //funcion asincrona que obtiene un GIF mediante getGifs, actualiza el estado.
    const getImages = async() => {
        const newImages = await getGifs( categoria );//espera la promea que deuleve getGifs
        setImages(newImages);//actualizar el estado del component con las nuevas imaginas de getGifs
        setIsloading(false);//indicar que la operacion asincrona ha finalizado
        //Este es un patrón común en los componentes de React donde se utilizan 
        //operaciones asíncronas para obtener datos y el componente debe actualizar su estado en consecuencia.
    }

    //este hook permite realizar efectos secundarios: se ejecuta depues de que el componente se ha renderizado
    useEffect( () => {//funcion anonima que se ejecuta como efecto secundario
        getImages();//se llama solo después de que el componente se haya montado.
    }, [] )//se defiene un arreglo para las dependecias, es decir que este hook se ejecuta sola una vez despues del renderizado del componente
    

  return {
    images,
    isLoading
  }
    
}
