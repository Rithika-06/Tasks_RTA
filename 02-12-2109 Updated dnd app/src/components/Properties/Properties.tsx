import * as React from 'react';
import './Properties.css';
import TextInput from '../fields/input';

export interface PropertiesOfInputFiled {
    elemantType?: string,
    type?: any,
    placeholder?: string,
    value?: string,
    label?: string,
    validation?: Validation,
    isValidation?: boolean,
    select?:any
}

export interface Validation {
    require: boolean,
    min?: number,
    max?: number,
    pattern?: string
}  


const propertiesObj: PropertiesOfInputFiled = {
    elemantType: "input",
    type: ['text', 'email', 'password', 'number', 'tel'],
    placeholder: "",
    value: "",
    label: "",
    validation: {
        require: false,
        min: 0,
        max: 0,
        pattern: ""
    },
    isValidation: false,
    select:""
}

class Properties extends React.Component<any, PropertiesOfInputFiled> {
    constructor(props: any) {
        super(props);
        this.state = propertiesObj;
    }
    componentDidMount(){
        this.props.inputHandleChange(this.state)
    }

    handleChange = async (event: any) => {
        if(event.target.name === 'isValidation' || event.target.name === 'require' || event.target.name === 'min' || event.target.name === 'max' || event.target.name === 'pattern')
        {
            const validation:any= {...this.state.validation};
            if(event.target.name === 'require' ){
                validation[event.target.name]= event.target.checked;
            }
            else if(event.target.name === 'isValidation'){
                await this.setState({
                    [event.target.name]: event.target.checked 
                })
            }
            else{
                validation[event.target.name]= event.target.value;
            }
            
           await this.setState({
                validation:validation
            })
        }
        else{
           await this.setState({
                [event.target.name]: event.target.value 
            })
        }        
       this.props.inputHandleChange(this.state)
    }
    handleSelect = (e: any) => {
        
        this.setState({
            select: e.target.value
        })
    }
    render() {
        const { type ,validation} = this.state;
        return (
            <div className="properties__fields">
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-4">
                            <label>Type</label>
                        </div>
                        <div className="col-sm-8">
                            <select onChange={this.handleSelect} className="form-control">                        {
                                type.map((value: any, index: any) => {
                                    return <option value={value} key={index}>{value.toUpperCase()}</option>
                                })
                            }
                            </select>
                        </div>
                    </div>


                </div>
                <div className="form-group">
                    <TextInput
                        id="placeholder"
                        label="Placeholder"
                        name="placeholder"
                        type="text"
                        value={this.state.placeholder}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <TextInput
                        id="value"
                        label="Value"
                        name="value"
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <TextInput
                        id="label"
                        label="Label"
                        name="label"
                        type="text"
                        value={this.state.label}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <TextInput
                        id="isValidation"
                        label="Validation"
                        name="isValidation"
                        type="checkbox"
                        value={this.state.isValidation}
                        onChange={this.handleChange}
                    />
                </div>
                {
                    (validation && this.state.isValidation)?
                    <React.Fragment>
                    <div className="row ">
                        <div className="col-sm-12">
                        <div className="form-group">
                            <TextInput
                                id="require"
                                label="Require"
                                name="require"
                                type="checkbox"
                                value={validation.require}
                                onChange={this.handleChange}
                            />        
                            </div>                    
                        </div>
                        <div className="col-sm-12">
                        <div className="form-group">
                            <TextInput
                                id="pattern"
                                label="Pattern"
                                name="pattern"
                                type="text"
                                value={validation.pattern}
                                onChange={this.handleChange}
                            />
                            </div>
                        </div>
                    </div>
                 <div className="form-group">
                    <div className="row">
                        <div className="col-sm-12">
                        <div className="form-group">
                            <TextInput
                            id="min"
                            label="Min"
                            name="min"
                            type="number"
                            value={validation.min}
                            onChange={this.handleChange}
                        />
                        </div>
                        </div>
                        <div className="col-sm-12">
                        <div className="form-group">
                            <TextInput
                            id="max"
                            label="Max"
                            name="max"
                            type="number"
                            value={validation.max}
                            onChange={this.handleChange}
                        />
                        </div>
                        </div>
                      
                    </div>
                   
                </div>
                    </React.Fragment>
                    : null
                }
                  <button className="btn btn-primary" onClick={()=>this.props.onSubmit(this.state)}>Submit</button>
            {/* <p>{JSON.stringify(this.state)}</p> */}
            </div>
        );
    }
}

export default Properties;

