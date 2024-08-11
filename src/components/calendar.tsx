import { DatePicker } from "@mantine/dates";

function Calenda({ selectedDate, setSelectedDate }: any) {
  console.log("in calenda " + selectedDate);
  return (
    <DatePicker allowDeselect value={selectedDate} onChange={setSelectedDate} />
  );
}

export default Calenda;
