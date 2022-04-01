import React, {useState} from 'react';
import ExpenseContainer from "./components/Expenses/ExpenseContainer.component";
import NewExpense from './components/NewExpense/NewExpense.component';

function App() {

  const expenses = [
    {id: 'e1', title: 'Chase Credit Card', amount: 35.00, date: new Date(2020, 2, 30)},
    {id: 'e2', title: 'Gas', amount: 13.00, date: new Date(2019, 5, 16)},
    {id: 'e3', title: 'Pizza', amount: 12.68, date: new Date(2021, 1, 25)},
    {id: 'e4', title: 'Hennessy', amount: 16.75, date: new Date(2021, 7, 30)},
    {id: 'e5', title: 'Flatscreen 4K TV', amount: 754.75, date: new Date(2021, 6, 30)},
  ];

  const [expenseState, setExpenseState] = useState(expenses);
  console.log('Initial State:', expenseState);

  const addNewExpenseHandler = newExpense => {

    const newExpenseData = {
      id: `e${Math.floor(Math.random() * 100).toString()}`,
      title: newExpense.enteredTitle,
      amount: newExpense.enteredAmount,
      date: newExpense.enteredDate,
    }

    setExpenseState((prevState) =>{
      return [newExpenseData, ...prevState]
    });
  }

  console.log('After SetState:', expenseState)

  return (
    <div>
      <NewExpense onSaveExpenseData={addNewExpenseHandler}/>
      <ExpenseContainer items={expenseState}/>
    </div>   
  );
}

export default App;
