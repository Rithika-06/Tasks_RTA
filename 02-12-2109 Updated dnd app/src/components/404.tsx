import * as React from 'react';

export interface ErrorProps {
    
}
 
export interface ErrorState {
    
}
 
class Error extends React.Component<ErrorProps, ErrorState> {
    constructor(props: ErrorProps) {
        super(props);
        // this.state = { :  };
    }
    render() { 
        return (
            <div>Hello</div>
          );
    }
}
 
export default Error;