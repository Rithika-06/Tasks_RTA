import * as React from 'react';
import Router from './Router';


export interface AppProps {

}

export interface AppState {

}

class App extends React.Component<AppProps, AppState> {
  state = {}

  render() {
    return (
        <Router />

    );
  }
}

export default App;
