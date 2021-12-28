import React from "react";
import ExpenseItem from "./ExpenseItem";
function Expenses(props){
return(
    <div>
        <ExpenseItem 
    date={props.expensesArray[0].expansedate} 
    title={props.expensesArray[0].expenseTitle} 
    amount={props.expensesArray[0].expenseAmount} 
    />
     <ExpenseItem 
      date={props.expensesArray[1].expansedate} 
      title={props.expensesArray[1].expenseTitle} 
      amount={props.expensesArray[1].expenseAmount} 
    /> 
    <ExpenseItem 
      date={props.expensesArray[2].expansedate} 
      title={props.expensesArray[2].expenseTitle} 
      amount={props.expensesArray[2].expenseAmount} 
    /> 
    </div>
)
}
export default Expenses;