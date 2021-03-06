import React, {useState} from 'react';

import './ExpenseForm.component.css';

const ExpenseForm = (props) => {
    //useState initial state is always read as a string.
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    //Setting one state
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    })

    const [isFormOpen, setIsFormOpen] = useState(false);

    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value }
        })
    }
    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })

        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value }
        })
    }
    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })

        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value }
        })
    }

    const cancelClickHandler = () => {
        setIsFormOpen(false);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            ...userInput,
            enteredDate : new Date(userInput.enteredDate)
        }

        props.onSaveExpenseData(expenseData);

        setUserInput((prevState) => {
            return { enteredTitle: '', enteredAmount: '', enteredDate: '' }
        })
    }

    const addNewExpenseClickHandler = () => {
        setIsFormOpen(true);
    }

    if (!isFormOpen) {
        return <div>
            <button onClick={addNewExpenseClickHandler}>Add New Expense</button>
        </div>
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text' 
                        value={userInput.enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number' 
                        min='0.01' 
                        step='0.01'
                        value={userInput.enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type='date' 
                        min='2019-01-01' 
                        max='2022-12-31' 
                        value={userInput.enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={cancelClickHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;