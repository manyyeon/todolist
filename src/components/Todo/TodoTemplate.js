import TodoListContainer from "../../containers/TodoListContainer";
import styles from "../../styles/TodoTemplate.module.scss";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TodoTemplate = () => {
  const [nowDate, setNowDate] = useState({
    year: "",
    month: "",
    date: "",
    dayOfWeek: "",
  });
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  useEffect(() => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let dayOfWeek = week[now.getDay()];
    setNowDate({
      year: year,
      month: month,
      date: date,
      dayOfWeek: dayOfWeek,
    });
  }, []);
  return (
    <div className={cx("TodoTemplate")}>
      <div className={cx("TodoHead")}>
        <div className={cx("Title")}>To Do List</div>
        <div className={cx("Date")}>
          {nowDate.year}년 {nowDate.month}월 {nowDate.date}일{" "}
          {nowDate.dayOfWeek}
          요일
        </div>
      </div>
      <TodoListContainer />
    </div>
  );
};

export default TodoTemplate;
