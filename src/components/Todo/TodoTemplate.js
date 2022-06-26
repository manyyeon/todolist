import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import styles from "../../styles/TodoTemplate.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TodoTemplate = () => {
  return (
    <div className={cx("TodoTemplate")}>
      <TodoHead />
      <TodoList />
      <TodoCreate />
    </div>
  );
};

export default TodoTemplate;
