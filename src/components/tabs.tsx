import { Tabs } from "@mantine/core";
import HomeTabs from "../components/homeTabs";
import ModalTabs from "../components/modalTabs";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/charts/styles.css";

function TabsCalGraph({ orientation, selectedDate, setSelectedDate }: any) {
  return (
    <Tabs
      orientation={orientation}
      color="#FFE8FF"
      variant="outline"
      defaultValue={orientation === "horizontal" ? "calendar" : "diet"}
      className="w-full h-full"
    >
      {orientation === "horizontal" ? (
        <HomeTabs
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      ) : (
        <ModalTabs />
      )}
    </Tabs>
  );
}

export default TabsCalGraph;
