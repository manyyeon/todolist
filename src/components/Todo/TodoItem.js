import TodoItemView from "./TodoItemView";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);

  const TodoItemProps = {
    todo,
    isChecked,
    onCheck: () => {
      setIsChecked(true);
      onToggle(todo.id);
    },
    onUncheck: () => {
      setIsChecked(false);
      onToggle(todo.id);
    },
    onRemove: () => {
      onDelete(todo.id);
    },
  };

  return <TodoItemView {...TodoItemProps} />;
};

export default TodoItem;
