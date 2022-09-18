import React from 'react';
import PropTypes from 'prop-types';

import { IoMdTrash } from 'react-icons/io';
import style from './TodoList.module.css';

class TodoList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.editTodoHandler = this.editTodoHandler.bind(this);
    this.editTodoSubmitHandler = this.editTodoSubmitHandler.bind(this);
    this.operationHandler = this.operationHandler.bind(this);
  }

  editTodoHandler = (e) => {
    const { id, textContent } = e.target;
    const [, indx] = id.split('__');
    const form = document.querySelector(`#todo-edit_form__${indx}`);
    form.classList.remove(`${style.Disappear}`);
    const updateTodoInput = document.querySelector(`#UpdateFormInput__${indx}`);
    updateTodoInput.value = textContent;
  }

  editTodoSubmitHandler = (e) => {
    e.preventDefault();
    const { storageName } = this.props;
    const getAllLocalStorageData = JSON.parse(localStorage.getItem(storageName));
    const { id, firstChild } = e.target;
    const [, index] = id.split('__');
    const todo = document.querySelector(`#todo__${index}`);
    const form = document.querySelector(`#todo-edit_form__${index}`);
    todo.textContent = firstChild.value;
    getAllLocalStorageData.forEach((eachTodo) => {
      const { id } = eachTodo;
      if (id === index) {
        // eslint-disable-next-line no-param-reassign
        eachTodo.description = todo.textContent;
      }
    });
    localStorage.setItem(storageName, JSON.stringify(getAllLocalStorageData));
    form.classList.add(`${style.Disappear}`);
  }

  operationHandler = (e, indx) => {
    const { target } = e;
    const { storageName } = this.props;
    let getAllLocalStorageData = JSON.parse(localStorage.getItem(storageName));

    if (target.className === style.IsCompleted
        || target.parentNode.className === style.DeleteTodo || target.nodeName === 'path' || target.nodeName === 'svg') {
      if (target.className === style.IsCompleted) {
        const task = document.querySelector(`#todo__${indx}`);
        if (target.checked) {
          task.classList.toggle(style.TodosCompleted);
        } else {
          task.classList.toggle(style.TodosCompleted);
        }
        getAllLocalStorageData.forEach((eachTodo) => {
          const { id } = eachTodo;
          if (id === indx) {
            // eslint-disable-next-line no-param-reassign
            eachTodo.completed = target.checked;
          }
        });
      } else if (target.nodeName === 'path' || target.nodeName === 'svg' || target.parentNode.className === style.DeleteTodo) {
        const getListItem = document.querySelector(`#todo-list__${indx}`);
        getAllLocalStorageData = getAllLocalStorageData.filter((eachTodo) => eachTodo.id !== indx);
        getListItem.remove();
      }
    }
    localStorage.setItem(storageName, JSON.stringify(getAllLocalStorageData));
  }

  render() {
    const { items } = this.props;
    return (
      <ul className={style.TodoContainer}>
        {items.map((each) => (
          <li key={each.id} id={`todo-list__${each.id}`} className={style.List}>
            <div className={style.TodoListWrapper} id={`todo-wrapper__${each.id}`} role="presentation" onClick={(e) => { this.operationHandler(e, each.id); }}>
              {each.completed
                ? <input type="checkbox" className={style.IsCompleted} aria-label="mark your task as uncomplete" defaultChecked />
                : <input type="checkbox" className={style.IsCompleted} aria-label="mark your task as completed" />}
              <p
                className={`${style.Todos} ${each.completed ? style.TodosCompleted : ''}`}
                id={`todo__${each.id}`}
                onDoubleClick={(e) => { this.editTodoHandler(e); }}
              >
                {each.description}
              </p>
              <button type="button" className={style.DeleteTodo}>
                <IoMdTrash />
              </button>
            </div>
            <form className={`${style.TodoEditForm} ${style.Disappear}`} id={`todo-edit_form__${each.id}`} onSubmit={(e) => { this.editTodoSubmitHandler(e); }}>
              <input type="text" aria-label="update todo" className={`${style.UpdateFormInput}`} id={`UpdateFormInput__${each.id}`} />
            </form>
          </li>
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  storageName: PropTypes.string.isRequired,
  // stateData: PropTypes.func.isRequired,
};

export default TodoList;
