import { BsCheckCircle, BsCircle } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import styles from "../../styles/TodoItem.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={cx("TodoItem")}>
      {isChecked ? (
        <BsCheckCircle
          className={cx("Button")}
          size="2rem"
          color="#2962f6"
          onClick={() => {
            setIsChecked(false);
            onToggle(todo.id);
          }}
        />
      ) : (
        <BsCircle
          className={cx("Button")}
          size="2rem"
          color="#adb5bd"
          onClick={() => {
            setIsChecked(true);
            console.log(todo.id);
            onToggle(todo.id);
          }}
        />
      )}

      <ul className={cx("Text")}>{todo.text}</ul>
      <FaTrashAlt
        className={cx("Button", "Trash")}
        size="1.5rem"
        onClick={() => {
          onDelete(todo.id);
        }}
      />
    </div>
  );
};

export default TodoItem;
