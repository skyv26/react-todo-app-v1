import React from 'react';
import Header from './components/Header/Header';
import TodoInput from './components/TodoInput/TodoInput';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <TodoInput />
      </>
    );
  }
}

export default App;
