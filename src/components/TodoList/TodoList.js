import React from 'react';

class TodoList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [
        {
          id: 1,
          description: 'Wake up early in the morning',
          completed: false,
        },
        {
          id: 2,
          description: 'Do breakfast with healthy food',
          completed: false,
        },
        {
          id: 3,
          description: 'Complete react project',
          completed: false,
        },
      ],
    };
  }

  render() {
    const { todoItems } = this.state;
    return (
      <ul>
        {todoItems.map((each) => `<li key={each.id}>${each}</li>`)}
      </ul>
    );
  }
}

export default TodoList;
