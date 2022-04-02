import React, {useState} from 'react';
import Card from'../UI/Card/Card.component';
import ExpenseItem from './ExpenseItem.component';
import ExpenseFilter from './ExpenseFilter.component';

import { filterByYearHandler } from '../../Utilities'
import './ExpenseContainer.component.css';

function ExpensesContainer(props) {
    // Saving Initial Data into variable
    const expenses = props.items;

    const [filterYearState, setFilterYearState] = useState('2019');

    // Function used to lift the filter state to be used in this component
    const saveFilterYearHandler = year => {    
        setFilterYearState(year);
    }

    // Saving the filtered expenses data that will be used to dynamically generate expense items
    const filteredData = filterByYearHandler(expenses, filterYearState);
    
    let expensesContent = <p>No expenses found.</p>

    if (filteredData.length > 0) {
        expensesContent = filteredData.map( expense => (
                <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}        
                ></ExpenseItem>
            )
        )
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={filterYearState} onSaveFilterYear={saveFilterYearHandler} />
                {expensesContent}
            </Card>
        </div>
    )
}

export default ExpensesContainer;