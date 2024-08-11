import { LineChart } from "@mantine/charts";
import { IconCalendar, IconGraph } from "@tabler/icons-react";
import { data } from "../data/data";
import Calenda from "../components/calendar";
import { Tabs, rem } from "@mantine/core";

function HomeTabs({ selectedDate, setSelectedDate }: any) {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <>
      <Tabs.List>
        <Tabs.Tab
          value="calendar"
          leftSection={<IconCalendar style={iconStyle} />}
        >
          Calendar
        </Tabs.Tab>
        <Tabs.Tab value="graph" leftSection={<IconGraph style={iconStyle} />}>
          Graph
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="calendar">
        <Calenda
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </Tabs.Panel>

      <Tabs.Panel value="graph">
        <LineChart
          h={259}
          w={259}
          data={data}
          dataKey="date"
          series={[
            { name: "Apples", color: "indigo.6" },
            { name: "Oranges", color: "blue.6" },
            { name: "Tomatoes", color: "teal.6" },
          ]}
          curveType="linear"
          connectNulls
        />
      </Tabs.Panel>
    </>
  );
}

export default HomeTabs;
