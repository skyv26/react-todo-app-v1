import React from 'react';

class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <a href="https://" className="todo-logo">todos</a>
      </header>
    );
  }
}

export default Header;
