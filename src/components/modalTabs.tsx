import { IconBowlSpoonFilled, IconRun, IconMoon } from "@tabler/icons-react";
import { Tabs, rem } from "@mantine/core";
import Form from "./form";

function ModalTabs() {
  const iconStyle = { width: rem(12), height: rem(12) };
  return (
    <>
      <Tabs.List>
        <Tabs.Tab
          value="diet"
          leftSection={<IconBowlSpoonFilled style={iconStyle} />}
        >
          Diet
        </Tabs.Tab>
        <Tabs.Tab value="exercise" leftSection={<IconRun style={iconStyle} />}>
          Exercise
        </Tabs.Tab>
        <Tabs.Tab value="sleep" leftSection={<IconMoon style={iconStyle} />}>
          Sleep
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="diet">
        <div>
          <Form />
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="exercise">
        <div>
          <Form />
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="sleep">
        <div>
          <Form />
        </div>
      </Tabs.Panel>
    </>
  );
}

export default ModalTabs;
