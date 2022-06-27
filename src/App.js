import TodoTemplate from "./components/Todo/TodoTemplate";
import CalendarTemplate from "./components/Calendar/CalendarTemplate";
import styles from "./styles/App.module.scss";
import classNames from "classnames/bind";
import "./App.css";

const cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx("App")}>
      <TodoTemplate />
      <CalendarTemplate />
    </div>
  );
}

export default App;
