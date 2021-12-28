import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
let ExpenseItem=(props)=>{

    const[title,setTitle]=useState(props.title); 
    function changeFunction()
    {
      setTitle('New Title');
    }
    return(
        <Card className='expenseclass'>
           <ExpenseDate eDate={props.date} />
        <div>
        <h2>TitleName : {title}</h2>
        <h3>Price : {props.amount}</h3>
        </div>
         <button onClick={ changeFunction }>ChangeButton</button>
        </Card>
    )
}
export default ExpenseItem;