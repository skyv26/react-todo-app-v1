import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import TodoInput from './components/TodoInput/TodoInput';
import AboutApp from './components/About/AboutApp';
import AboutAuthor from './components/About/AboutAuthor';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <Route path="/about-app">
          <AboutApp />
        </Route>
        <Route path="/about-author">
          <AboutAuthor />
        </Route>
        <Header />
        <TodoInput />
      </>
    );
  }
}

export default App;
