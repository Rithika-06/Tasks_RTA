import * as React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

export interface AppProps {

}

export interface AppState {

}

class Home extends React.Component<AppProps, AppState> {
  state = {
    isLoading:true
  }  
  componentDidMount(){
    setTimeout(()=> {
          this.setState({isLoading: false});
      },
      2000
  );
  }
  render() {
    return (
      <React.Fragment>
        <div className="home">
          {
            (this.state.isLoading) ? <div className="home__loader">Loading...</div> : 
            <div className="home__desinger">
            <Link to="/pagedesigner" className="home__desinger--link">Page Desinger</Link>
            <Link to="/" className="home__desinger--link">Form Desinger</Link>
         </div>
          }
          
          
        </div>
      </React.Fragment>

    );
  }
}

export default Home;
