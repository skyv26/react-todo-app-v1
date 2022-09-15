import React from 'react';
import { IoMdTrash } from 'react-icons/io';
import style from './TodoList.module.css';

class TodoList extends React.Component {
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
      // updateTodoToggle: false,
    };
    this.editTodoHandler = this.editTodoHandler.bind(this);
  }

  editTodoHandler = (indx) => {
    document.querySelector(`#todo-edit_form-${indx}`).classList.remove(`${style.Disappear}`);
    // this.setState((prevState) => ({ ...prevState, updateTodoToggle: true }));
  }

  render() {
    const { todoItems } = this.state;
    return (
      <ul>
        {todoItems.map((each, index) => (
          <li key={each.id} id={`todo-list-${index}`} className={style.List}>
            <div className={style.TodoListWrapper} id={`todo-wrapper-${index}`}>
              <input type="checkbox" className={style.IsCompleted} aria-label={`mark your task as ${this.checked ? 'uncompleted' : 'completed'}`} />
              <p
                className={style.Todos}
                onDoubleClick={() => { this.editTodoHandler(index); }}
              >
                {each.description}
              </p>
              <button type="button" className={style.DeleteTodo}>
                <IoMdTrash />
              </button>
            </div>
            <form className={`${style.TodoEditForm} ${style.Disappear}`} id={`todo-edit_form-${index}`}>
              <input type="text" aria-label="update todo" className={`${style.UpdateFormInput}`} />
            </form>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
