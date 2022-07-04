import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "../components/Todo/TodoList";
import { addTodo, toggleTodo, deleteTodo } from "../modules/todos";

function TodoListContainer() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(addTodo(text));
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);
  const onDelete = useCallback((id) => dispatch(deleteTodo(id)), [dispatch]);

  return (
    <TodoList
      todos={todos}
      onCreate={onCreate}
      onToggle={onToggle}
      onDelete={onDelete}
    />
  );
}

export default TodoListContainer;
