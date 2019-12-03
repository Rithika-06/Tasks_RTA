//npm dependencies
import * as React from 'react';
import Label from './label'


//interface for Login page is created
interface IFieldProps {
    id?: string;
    label?: string;
    type?: string;
    name?: string;
    placeholder?: string;
    value?: any;
    onChange?: (event: any) => void;
}


class Input extends React.Component<IFieldProps>{
    render() {
        let { id, type, placeholder, value, onChange, label, name } = this.props;
        return (
            <React.Fragment>
               
                   {
                       (type == 'checkbox') ?  
                       <React.Fragment>
                           <label className="form-check-label">
                            <input type={type} className="form-check-input" name={name} id={id} value={value} onChange={onChange}/>{label}
                         </label>
                       </React.Fragment> : 
                       <div className="row">
                        <div className="col-sm-4">
                        <Label htmlFor={id} label={label} />
                        </div>
                        <div className="col-sm-8">
                        <input
                            id={id}
                            type={type}
                            onChange={onChange}
                            value={value}
                            name={name}
                            placeholder={placeholder}
                            className="form-control"
                        />
                        </div>
                    </div>
                       
                   } 
               
               
            </React.Fragment>
        );
    }
}


export default Input;