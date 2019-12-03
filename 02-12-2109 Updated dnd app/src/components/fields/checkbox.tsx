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


class CheckBox extends React.Component<IFieldProps>{
    render() {
        let { id, type, placeholder, value, onChange, label, name } = this.props;
        return (
            <React.Fragment>
                <div className="form-group">
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
                     
                   
                </div>
               
               
            </React.Fragment>
        );
    }
}


export default CheckBox;