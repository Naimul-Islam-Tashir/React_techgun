import './ExpenseItem.css'
let ExpenseItem=(props)=>{
    let day=props.date.toLocaleString('en-US',{month:'long'});
    let month=props.date.toLocaleString('en-US',{day:'2-digit'});
    let year=props.date.getFullYear();
    return(
        <div>
            <div>
            <div>{ day }</div>
            <div>{ month }</div>
            <div>{ year }</div>
            </div>
            <div>
        <h2>TitleName : {props.title}</h2>
        <h3>Price : {props.amount}</h3>
        </div>
        </div>
    )
}
export default ExpenseItem;