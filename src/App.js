import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import TodoInput from './components/TodoInput/TodoInput';
import About from './components/About/About';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <TodoInput />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
