import { useState } from "react";
import TodoItem from "../Todo/TodoItem";
import { BsFillPlusCircleFill, BsXCircleFill } from "react-icons/bs";
import styles from "../../styles/TodoCreate.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TodoCreate = ({ todos, onCreate, onToggle, onDelete }) => {
  const [text, setText] = useState("");
  const [isPlusButtonClicked, setIsPlusButtonClicked] = useState(false);
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };
  return (
    <div className={cx("TodoCreate")}>
      <div className={cx("AddTodo")}>
        {isPlusButtonClicked ? (
          <>
            <BsXCircleFill
              className={cx("Button")}
              size="3rem"
              color="#e53935"
              onClick={() => {
                setIsPlusButtonClicked(false);
              }}
            />
            <form onSubmit={onSubmit}>
              <input
                className={cx("Input")}
                value={text}
                placeholder="할 일 입력하고 Enter"
                onChange={onChange}
              />
            </form>
          </>
        ) : (
          <BsFillPlusCircleFill
            className={cx("Button")}
            size="3rem"
            color="#2962f6"
            onClick={() => {
              setIsPlusButtonClicked(true);
            }}
          />
        )}
      </div>

      <ul className={cx("TodoList")}>
        {todos &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoCreate;
