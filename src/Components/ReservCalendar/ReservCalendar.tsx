import { useState } from "react";
import Calendar from "react-calendar";

import "./ReservCalendar.css";
import * as S from "./ReservCalendar.styles";

import prevIcon from "../../Statics/left.png";
import prev2Icon from "../../Statics/left2.png";
import nextIcon from "../../Statics/right.png";
import next2Icon from "../../Statics/right2.png";

type DateType = Date | null;
type Value = DateType | [DateType, DateType];

export default function ReservCalendar() {
  const today = new Date();
  const [activeDate, setActiveDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), today.getDate())
  );

  const handleChangeDate = (value: Value) => {
    if (value !== null) setActiveDate(value as Date);
  };

  return (
    <S.Container>
      <Calendar
        showFixedNumberOfWeeks
        prevLabel={<img src={prevIcon} />}
        prev2Label={<img src={prev2Icon} />}
        nextLabel={<img src={nextIcon} />}
        next2Label={<img src={next2Icon} />}
        onChange={handleChangeDate}
        value={activeDate}
      />
    </S.Container>
  );
}
