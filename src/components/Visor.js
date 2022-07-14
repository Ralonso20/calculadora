import React from "react";
import '../stylesheets/Visor.css';
function Visor(props) {
    return(
        <div className='Visor-value'>
            {props.visorValue}
        </div>
    );
}

export default Visor;