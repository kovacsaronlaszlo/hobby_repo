import React, {useState} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  /* 
    Ez által el tudjuk menteni az adatainkat egy firebase adatbázisba, de ez nem okozza azt, hogy az aatok automatikusan meg is jelennek,
    ha ráfrissítünk az applikációra!
  */
  const addIngredientHandler = ingredient => {
    fetch('https://react-hooks-update-d7d59-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    }).then( response => {
      return response.json();
    }).then(responseData => {
      setUserIngredients(prevIngredients => [
        ...prevIngredients,
        {
          id: responseData.name,
          ...ingredient
        }
      ]);
    });
    
  };

  return (
    <div className="App">
      <IngredientForm addIngredientHandler={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={() => {}} />
      </section>
    </div>
  );
}

export default Ingredients;
