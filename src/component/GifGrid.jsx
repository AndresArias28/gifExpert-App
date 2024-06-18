import PropTypes from 'prop-types';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ categoria }) => {//recibe categoria en las props del componente en forma desestructurada

    const {images, isLoading} = useFetchGifs( categoria );//crea un estado llamado images que se inicializa con catgegoria. Devuelve dos propiedades

    return(
        
        <>
            <h3> {categoria} </h3>
            {
                isLoading && (<h2>Cargando...</h2>  /*si  isLoading existe entonces mostrar cargando */) 
            }
            
            {/*si existe estado en image, se mapea el estado y se envian como las props para el componente GifItem. se le envia
             el key y las demas propiedades que contiene el estado image  */}
            <div className="card-grid">
                {
                    images?(
                        images.map( (image) => (
                            <GifItem key={ image.id } { ...image } />
                        )) 
                    ): (
                        <p>Cargando...</p>)
                }
            </div>
        </>                                                                                                                                                                                                                                                                                                                        
    )
}

GifGrid.propTypes = {
    categoria: PropTypes.string.isRequired,
}