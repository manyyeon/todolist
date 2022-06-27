import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoCreate from "../components/Todo/TodoCreate";
import { addTodo, toggleTodo } from "../modules/todos";

function TodoCreateContainer() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(addTodo(text));
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  return <TodoCreate todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodoCreateContainer;
