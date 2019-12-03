import * as React from 'react';
import './Pagedesigner.css';
import Properties from '../../Properties/Properties';
export interface PagedesignerProps {

}

export interface PagedesignerState {

}

class Pagedesigner extends React.Component<any, any> {
    constructor(props: PagedesignerProps) {
        super(props);
        this.state = {
            data:this.props.data,
            propertiesArray:[]
        };
    }
    inputHandleChange=async (data:any) =>{
        const propertyObj:any={...data};
       await this.setState({
            data:propertyObj
        })

    }
    onSubmit=(data:any)=>{
        data.id=Math.random();
        this.setState({
            propertiesArray:[...this.state.propertiesArray, data]
        })
    }
    // static getDerivedStateFromProps(nextProps:any, prevState:any){
    //     if(nextProps.data.name!==prevState.data.name){
    //       return { data: nextProps.data};
    //    }
    //    else return { data: nextProps.data};
    //  }
    render() {
        console.log(this.state.data)
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

export default Pagedesigner;