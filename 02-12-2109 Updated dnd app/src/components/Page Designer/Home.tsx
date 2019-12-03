import * as React from 'react';
import Pagedesigner from './Page Desinger/Pagedesigner';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Example from '../Dng/example';
import './Home.css';

export interface AppProps {

}

export interface AppState {

}

class Home extends React.Component<AppProps, AppState> {
  state = {}  
  render() {
    return (
      // <React.Fragment>
      //   <div className="inputfields">
      //   </div>
      //   <div className="pagedesigner">
      //     <Pagedesigner />
      //   </div>
      // </React.Fragment>
      <React.Fragment>
      {/* <div className="inputfields">
      <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider>
      </div>
      <div className="workspace">
        <Workspace />
      </div> */}
        <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider>
    </React.Fragment>

    );
  }
}

export default Home;
