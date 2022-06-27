import TodoItem from "../Todo/TodoItem";

const TodoList = ({ todos, onToggle }) => {
  return (
    <ul>
      {todos &&
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
        ))}
    </ul>
  );
};

export default TodoList;
