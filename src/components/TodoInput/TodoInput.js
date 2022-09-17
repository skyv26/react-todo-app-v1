import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { v4 as uuidv4 } from 'uuid';
import TodoList from '../TodoList/TodoList';
import style from './TodoInput.module.css';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.localStorageName = 'daily_todos';
    this.state = {
      todoItems: [],
    };
    this.createTodoHandler = this.createTodoHandler.bind(this);
  }

  componentDidMount() {
    const localStorageData = JSON.parse(localStorage.getItem(this.localStorageName)) || [];
    this.setState((prev) => ({
      ...prev,
      todoItems: localStorageData,
    }));
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
      this.setState((prev) => {
        const newData = [...prev.todoItems, newObj];
        const newState = {
          todoItems: newData,
        };
        localStorage.setItem(this.localStorageName, JSON.stringify(newData));
        return newState;
      });
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
        <TodoList items={todoItems} storageName={this.localStorageName} stateData={this.setState} />
      </div>
    );
  }
}
export default TodoInput;
