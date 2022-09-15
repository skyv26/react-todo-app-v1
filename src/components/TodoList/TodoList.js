import React from 'react';
import { IoMdTrash } from 'react-icons/io';
import style from './TodoList.module.css';

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
        {todoItems.map((each) => (
          <li key={each.id} className={style.List}>
            <div className={style.TodoListWrapper}>
              <input type="checkbox" className={style.IsCompleted} aria-label={`mark your task as ${this.checked ? 'uncompleted' : 'completed'}`} />
              <p className={style.Todos}>{each.description}</p>
              <button type="button" className={style.DeleteTodo}>
                <IoMdTrash />
              </button>
            </div>
            <input type="text" aria-label="update todo" className={style.UpdateFormInput} />
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
