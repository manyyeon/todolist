const TodoItem = ({ todo, onToggle }) => {
  return (
    <li
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
      onClick={onToggle}
    >
      {todo.text}
    </li>
  );
};

export default TodoItem;
