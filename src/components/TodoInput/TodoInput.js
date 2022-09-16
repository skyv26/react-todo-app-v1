import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { v4 as uuidv4 } from 'uuid';
import TodoList from '../TodoList/TodoList';
import style from './TodoInput.module.css';

class TodoInput extends React.Component {
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
    this.createTodoHandler = this.createTodoHandler.bind(this);
  }

  createTodoHandler = (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const textData = elements[0].value.trim();
    if (textData.length === 0) {
      alert('Please fill data');
    } else {
      const newObj = {
        id: uuidv4(),
        description: textData,
        completed: false,
      };
      this.setState((prev) => ({
        todoItems: [...prev.todoItems, newObj],
      }));
      e.target.reset();
    }
  };

  render() {
    const { todoItems } = this.state;
    return (
      <div className={style.TodoInteractionWrapper}>
        <form className={style.Form} onSubmit={(e) => { this.createTodoHandler(e); }}>
          <input type="text" className={style.Text} placeholder="Add todo..." />
          <button type="submit" className={style.Submit}>
            <IoMdAddCircle />
          </button>
        </form>
        <TodoList items={todoItems} />
      </div>
    );
  }
}
export default TodoInput;
