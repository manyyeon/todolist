import { BsCheckCircle, BsCircle } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import styles from "../../styles/TodoItem.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

const TodoItemView = ({ todo, isChecked, onCheck, onUncheck, onRemove }) => {
  return (
    <div className={cx("TodoItem")}>
      {isChecked ? (
        <BsCheckCircle
          className={cx("Button")}
          size="2rem"
          color="#2962f6"
          onClick={onUncheck}
        />
      ) : (
        <BsCircle
          className={cx("Button")}
          size="2rem"
          color="#adb5bd"
          onClick={onCheck}
        />
      )}

      <ul className={cx("Text")}>{todo.text}</ul>
      <FaTrashAlt
        className={cx("Button", "Trash")}
        size="1.5rem"
        onClick={onRemove}
      />
    </div>
  );
};

export default TodoItemView;
