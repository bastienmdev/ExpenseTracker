import React from 'react';

import ExpenseForm from './ExpenseForm.component';

import './NewExpense.component.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = expenseData => {
        const expense = {
            ...expenseData
        }
        props.onSaveExpenseData(expense);
    }


    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;