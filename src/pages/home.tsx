import { MantineProvider, Modal } from "@mantine/core";
import TabsCalGraph from "../components/tabs";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  return (
    <>
      <MantineProvider>
        <div className="h-screen flex items-center justify-center ">
          <div className="grid grid-cols-1 gap-5">
            <div className="flex flex-col items-center justify-center w-full shadow-2xl ">
              <TabsCalGraph
                orientation="horizontal"
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </div>
            <button
              onClick={open}
              className="flex flex-col items-center justify-center w-full bg-[#0D0B33] hover:bg-[#52489F] rounded-lg h-8 md:h-10"
            >
              <span className="text-[#E7C8E7] font-display text-sm md:text-md">
                Let's Track!
              </span>
            </button>
            <Modal
              opened={opened}
              onClose={close}
              centered
              overlayProps={{
                backgroundOpacity: 0.55,
                blur: 2,
              }}
              title={selectedDate != null ? selectedDate.toDateString() : ""}
            >
              <TabsCalGraph orientation="vertical" />
            </Modal>
          </div>
        </div>
      </MantineProvider>
    </>
  );
}

export default Home;
