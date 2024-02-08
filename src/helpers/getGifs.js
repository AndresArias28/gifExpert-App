export const getGifs = async(categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=GMerhRnbVA40fBFSS9FjceLZzt9HMqJ6&q=${ categoria }&limit=10`;//carco el apikey, con la categoria ingresada por usurio y limito a 10 el numero de gifs
    
    const resp = await fetch(url);//se uttiliza para recuperar recursos de un servidor. Es un API moderna y flexible para reemplazar tecnicas basadadas en XMLHttpRequest
    
    //Realizar una solicitud fetch, parsear la respuesta como JSON y extraer la propiedad data del objeto resultante
    const { data=[] } = await resp.json();//este metodo devuelve una promesa. Esperar a que la promesa devuelta por 'resp.jason()' se resuelva
                                          //en otras palabras el la ejecucion de pausara hasta que la promesa se complete  
                                          //Desestrucutra la propiedad data del objeto obtenido, si el objeto no existe se le asigna un valor predeterminado([])

    //Transformar un array de objetos img en otro array llamado gifs                                          
    const gifs = data.map( img => ({ //itera sobre cada elemento del array
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    //console.log(gifs);
    return gifs;
    
    
}