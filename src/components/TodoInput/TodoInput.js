import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import style from './TodoInput.module.css';

class TodoInput extends React.PureComponent {
  render() {
    return (
      <form className={style.Form}>
        <input type="text" className={style.Text} placeholder="Add todo..." />
        <button type="submit" className={style.Submit}>
          <IoMdAddCircle />
        </button>
      </form>
    );
  }
}

export default TodoInput;
