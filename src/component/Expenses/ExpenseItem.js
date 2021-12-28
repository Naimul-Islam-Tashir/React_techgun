import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card'

let ExpenseItem=(props)=>{
    
    return(
        
        <Card className='expenseclass'>
           <ExpenseDate eDate={props.date} />
        <div>
        <h2>TitleName : {props.title}</h2>
        <h3>Price : {props.amount}</h3>
        </div>
        </Card>
    )
}
export default ExpenseItem;