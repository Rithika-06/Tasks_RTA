//npm dependencies
import * as React from 'react';
 
//interface for Login page is created
interface ILoginProps {
     htmlFor?: string;   
     label?: string;
} 


class Label extends React.Component<ILoginProps,{}>{
    
    render() {
        let {htmlFor, label} = this.props;  
        return (              
                    <span className="text">
                         <label htmlFor={htmlFor} className="properties__label">{label}</label>
                    </span>           
        );
    }
}


export default Label;