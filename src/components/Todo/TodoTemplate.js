import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import TodoCreateContainer from "../../containers/TodoCreateContainer";
import styles from "../../styles/TodoTemplate.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TodoTemplate = () => {
  return (
    <div className={cx("TodoTemplate")}>
      <TodoHead />
      <TodoCreateContainer />
    </div>
  );
};

export default TodoTemplate;
