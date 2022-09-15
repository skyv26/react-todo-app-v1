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
    this.editTodoSubmitHandler = this.editTodoSubmitHandler.bind(this);
  }

  editTodoHandler = (e) => {
    const { id, textContent } = e.target;
    const [, indx] = id.split('-');
    const form = document.querySelector(`#todo-edit_form-${indx}`);
    form.classList.remove(`${style.Disappear}`);
    const updateTodoInput = document.querySelector(`#UpdateFormInput-${indx}`);
    updateTodoInput.value = textContent;
  }

  editTodoSubmitHandler = (e) => {
    e.preventDefault();
    const { id, firstChild } = e.target;
    const [, , index] = id.split('-');
    const todo = document.querySelector(`#todo-${index}`);
    const form = document.querySelector(`#todo-edit_form-${index}`);
    todo.textContent = firstChild.value;
    form.classList.add(`${style.Disappear}`);
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
                onDoubleClick={(e) => { this.editTodoHandler(e); }}
                id={`todo-${index}`}
              >
                {each.description}
              </p>
              <button type="button" className={style.DeleteTodo}>
                <IoMdTrash />
              </button>
            </div>
            <form className={`${style.TodoEditForm} ${style.Disappear}`} id={`todo-edit_form-${index}`} onSubmit={(e) => { this.editTodoSubmitHandler(e); }}>
              <input type="text" aria-label="update todo" className={`${style.UpdateFormInput}`} id={`UpdateFormInput-${index}`} />
            </form>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
