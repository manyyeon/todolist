import TodoItem from "../Todo/TodoItem";
import styles from "../../styles/TodoList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TodoList = ({ todos, onToggle }) => {
  return (
    <ul className={cx("TodoList")}>
      {todos &&
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
        ))}
    </ul>
  );
};

export default TodoList;
