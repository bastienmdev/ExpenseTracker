import React from 'react';

import ExpenseItem from './ExpenseItem.component';

import './ExpensesList.component.css';


const ExpensesList = (props) => {

    const filteredData = props.filteredData;

    // Conditional return statement
    if (filteredData.length === 0) {
        return <h2 className='expenses-list__fallback'>No expenses found.</h2>;
    }

    return <ul className='expenses-list'>
        {filteredData.map( expense => (
                <ExpenseItem                 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}        
                ></ExpenseItem>
            )
        )}
    </ul>
}

export default ExpensesList;