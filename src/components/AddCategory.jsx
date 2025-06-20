import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('')

    const onInputChanged = ({ target }) =>{
      setInputValue(target.value);
    }

    const onSubmit = ( event ) =>{
      event.preventDefault()
      if(inputValue.trim().length <= 1) return;

      // setCategories( categories => [ inputValue , ...categories])
      setInputValue('');
      onNewCategory( inputValue.trim() )
    }

  return  (
    <form onSubmit={ onSubmit }> 
      <input  //Porperties
          type="text" 
          placeholder="Buscar gifs"
          value={ inputValue }
          onChange={ onInputChanged }
      /> 
    </form>
  )
}