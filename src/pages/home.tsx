import { MantineProvider } from "@mantine/core";
import Calenda from "../components/calendar";

function Home() {
  return (
    <>
      <div className="h-screen flex items-center justify-center ">
        <div className="grid grid-cols-1 gap-5">
          <div className="shadow-2xl">
            <MantineProvider>
              <Calenda />
            </MantineProvider>
          </div>
          <button className="flex flex-col items-center justify-center w-full bg-[#0D0B33] hover:bg-[#52489F] rounded-lg h-8 md:h-10">
            <span className="text-[#E7C8E7] font-display text-sm md:text-md">
              Let's Track!
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
