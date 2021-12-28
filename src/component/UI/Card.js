import React from "react";
function Card(props){
    const clas="cardClass"+props.className;
    return(
        <div className={clas}>
         {props.children}
        </div>
    )
}
export default Card;