import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
let ExpenseItem=(props)=>{
    
    return(
        <div>
           <ExpenseDate eDate={props.date} />
        <div>
        <h2>TitleName : {props.title}</h2>
        <h3>Price : {props.amount}</h3>
        </div>
        </div>
    )
}
export default ExpenseItem;