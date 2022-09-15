import React from 'react';
import Header from './components/Header/Header';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <TodoInput />
        <TodoList />
      </>
    );
  }
}

export default App;
