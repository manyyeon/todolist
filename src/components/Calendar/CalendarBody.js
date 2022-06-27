import React, { useState } from "react";
import Calendar from "react-calendar";

import moment from "moment";

const CalendarBody = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={setDate}
        value={date}
        formatDay={(locale, date) =>
          moment(date).format("DD")
        } /* 날'일' 제외하고 숫자만 보이도록 설정 */
        minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        navigationLabel={null}
        showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
      />
    </div>
  );
};

export default CalendarBody;
