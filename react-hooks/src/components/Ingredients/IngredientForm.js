import React, {useState} from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  /* const [inputState, setInputState] = useState({
    title: '',
    amount: ''
  }); */
  /* 
    FONTOS! nem hasznáélhatunk useState-et ciklusban valamint feltételben, ám használhatunk belső fv-ben!
    legtöbbször előnyösebb a functional komponens core-jában használni, ha azt szeretnénnk, hogy elérhető élgyen a komponensen belül
  */
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const submitHandler = event => {
    event.preventDefault();
    props.addIngredientHandler({
      title: enteredTitle,
      amount: enteredAmount
    })
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input 
              type="text" 
              id="title" 
              value={enteredTitle} 
              onChange={event => setEnteredTitle(event.target.value)} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input 
              type="number" 
              id="amount" 
              value={enteredAmount} 
              onChange={event => setEnteredAmount(event.target.value)} />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
