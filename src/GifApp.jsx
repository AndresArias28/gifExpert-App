import { useState } from "react";
import {AddCategory, GifGrid } from './component'

export const GifApp = () => {

  //desestrucutracion del array para asginar los dos lementos retornados por useState a las varaiables categories y setCategories
  //categories: varaible que contiene  el estado actual(['One'])
  //setCAtegorie: funcion que puede utilizar para actualizar el estado categories, al llamarla, react re-*renderiza el componente con el nuevo estado
  const [categories, setCategories] = useState([ 'One' ])//inicializar categorie con un  array con la palabra 'One'


  //crear funcion que agrega una categoria nueva al estado actual
  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory) ) return;//
    setCategories([ newCategory, ...categories ]);//agregar newCatyegoru al arreglo de categorias sin crear otro nuevo. Actualiza el estado y re-renderiza
  }

  return(
      
    <>  
      <h1>Gif Expert APP</h1>

      <AddCategory addCategories={ event => onAddCategory(event) } />
        {
          categories.map(( category ) => (
            <GifGrid 
              key={category} categoria={category} />
          ))  
        }
    </>
  )
}