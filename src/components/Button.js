import React from "react";
import '../stylesheets/Button.css'
import '../stylesheets/ClearButton.css'
export function Button(props) {
    const isOperator = (value) => { 
        return isNaN(value) && (value !== ',') && (value !== '=')
    }

    return (
     <div className={`button-container ${isOperator(props.children) ? 'operator-button' : ''}`.trimEnd()}
     onClick={() => props.clickManage(props.children)}>
        {props.children}
     </div>   
    );
}

export function ClearButton(props) {
    return (
     <div className="button-clear"
     onClick={props.clearManage}>
        {props.children}
     </div>   
    );
}