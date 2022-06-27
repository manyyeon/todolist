import { BsCheckCircle, BsCircle } from "react-icons/bs";
import styles from "../../styles/TodoItem.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";

const cx = classNames.bind(styles);

const TodoItem = ({ todo, onToggle }) => {
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
          }}
        />
      ) : (
        <BsCircle
          className={cx("Button")}
          size="2rem"
          color="#adb5bd"
          onClick={() => {
            setIsChecked(true);
          }}
        />
      )}

      <ul className={cx("TodoItem")} onClick={onToggle}>
        {todo.text}
      </ul>
    </div>
  );
};

export default TodoItem;
