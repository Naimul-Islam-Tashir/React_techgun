import React from "react";
function ExpenseDate(props){
    let day=props.eDate.toLocaleString('en-US',{month:'long'});
    let month=props.eDate.toLocaleString('en-US',{day:'2-digit'});
    let year=props.eDate.getFullYear();
return(
    <div>
    <div>{ day }</div>
    <div>{ month }</div>
    <div>{ year }</div>
    </div>
)
}
export default ExpenseDate;