import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategory = ( newCategory ) => {

    if( categories.includes(newCategory)) return;

      // console.log(newCategory);
      // categories.push(newCategory); //Evitar uso de push en arreglos REACT
       setCategories([newCategory, ...categories]); //Forma 1 de hacer el insert en el array
      // setCategories(cat => [...cat, 'Valorant']); // Forma 2 de hacer el insert en el array
  }

  return (
    <>
        <h1>GifExpertApp</h1>
      
        <AddCategory 
          // setCategories={ setCategories }
          onNewCategory = { value => onAddCategory(value) }
        />
        
          { 
            categories.map(( category ) => (
              <GifGrid 
                key={category} 
                category={category}
              /> 
            )) 
          }    
    </>
  )
}