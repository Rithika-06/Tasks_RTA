import * as React from 'react';
import Properties from '../Properties/Properties';



const inputfields = (props:any) => {
    return (
        <div className="left-text">
            <p id={props.text}  onDragStart={(ev) => props.ondrag(ev)}  >{props.text}</p>

        </div>  
    )
}


export default inputfields;