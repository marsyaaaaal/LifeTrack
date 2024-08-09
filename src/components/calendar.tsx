import dayjs from "dayjs";
import { useState } from "react";
import { Calendar } from "@mantine/dates";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

function Calenda() {
  const [selected, setSelected] = useState<Date[]>([]);
  const handleSelect = (date: Date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, "date"));
    if (isSelected) {
      setSelected((current) =>
        current.filter((d) => !dayjs(d).isSame(date, "date"))
      );
    } else if (selected.length < 1) {
      setSelected((current) => [...current, date]);
    }
  };

  return (
    <Calendar
      getDayProps={(date) => ({
        selected: selected.some((s) => dayjs(date).isSame(s, "date")),
        onClick: () => handleSelect(date),
      })}
    />
  );
}

export default Calenda;
