import * as React from 'react';
import './Workspace.css';
import Properties from '../Properties/Properties';
export interface WorkspaceProps {

}

export interface WorkspaceState {

}

class Workspace extends React.Component<any, any> {
    constructor(props: WorkspaceProps) {
        super(props);
        this.state = {
            data:{},
            propertiesArray:[]
        };
    }
    inputHandleChange=async (data:any) =>{
        console.log(data);
        const propertyObj:any={...data};

       await this.setState({
            data:propertyObj
        })

    }
    onSubmit=(data:any)=>{
        console.log("data",data);
        data.id=Math.random();
        this.setState({
            propertiesArray:[...this.state.propertiesArray, data]
        })
    }
    render() {
        console.log(this.state.propertiesArray);
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-sm-8">                                    
                    <div className="right">
                            {/* <div id="div1" onDrop={(ev) => this.props.ondrop(ev)} onDragOver={(ev) => this.props.ondrogover(ev)} ></div> */}
                        </div>
                        <p>{JSON.stringify(this.state.data)}</p> 
                    </div>
                    <div className="col-sm-4 properties">
                        <Properties inputHandleChange={this.inputHandleChange} onSubmit={this.onSubmit}/>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

export default Workspace;