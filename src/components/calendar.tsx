import { useState } from "react";
import { DatePicker } from "@mantine/dates";

function Calenda() {
  const [value, setValue] = useState<Date | null>(new Date());
  return <DatePicker allowDeselect value={value} onChange={setValue} />;
}

export default Calenda;
