import React from "react";
import '../stylesheets/NumberButton.css'
import '../stylesheets/ClearButton.css'
export function NumerButton({numberValue}) {
    return (
     <div className='button-value'>
        {numberValue}
     </div>   
    );
}

export function OperationButton() {
    return (
     <div></div>   
    );
}

export function ClearButton() {
    return (
     <div className="button-clear">
        Clear
     </div>   
    );
}