import { useState } from "react";
import TodoList from "./TodoList";

const TodoCreate = ({ todos, onCreate, onToggle }) => {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} placeholder="할 일 입력" onChange={onChange} />
      </form>
      <button type="submit">등록</button>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
};

export default TodoCreate;
