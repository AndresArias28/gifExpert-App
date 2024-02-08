import { useState } from "react"

export const AddCategory = ({addCategories}) => {//Desestrucuturacion de las props para utilizar setCategories

    const [inputValue, setinputValue]  = useState('');

    //Esta función se encarga de actualizar el estado de inputValue segun lo que se escriba
    const onInputChange = ({target}) => {//Aqui se realiza la desestructuracion del objeto event y obtener la propiedad 'target'
        //console.log(event.target.value);
        setinputValue(target.value);//actualiza  el estado de inputValue con el valor actual del campo de entrada
    }

    //evento onsubmit maneja la presentacion del formulario, se ejecutara al enviar el formulario
    const onSubmit = (event) => {
        event.preventDefault(); //Evitar que se refresca el navegador cada vez que ingreso una letra
        if( inputValue.trim().length <= 1) return; //si solo hay 1 o ningun carater se sale de la funcion para que no acurra nada
        addCategories( inputValue.trim());//agrega categoria sin espacios
        setinputValue('');//refresco el navegador
    }

  return (

    <form onSubmit={(event) => onSubmit(event) }>
        <input  
            type="text" // indica caja de texto
            placeholder="buscar gif" //texto que aparece en el cuadro de texto
            value = { inputValue } /* en este caso el valor que ingresa el usuario se guardara en este estado/variable*/
            onChange={ onInputChange } //evento que se dispara cada vez que el valor de entrada cambia
        />
    </form>
  )
}
