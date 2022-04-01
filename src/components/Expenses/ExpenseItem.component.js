import React from 'react';

import Card from'../UI/Card/Card.component';
import ExpenseDate from './ExpenseDate.component';


import './ExpenseItem.component.css'

function ExpenseItem(props) {
    //React hook. Must be called inside the functional component
    //using array desttructuring to set variable to the returned array in Usestate. The first

    return (
        <Card className='expense-item'>
            
            <ExpenseDate date={props.date} />

            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    )
};

export default ExpenseItem;