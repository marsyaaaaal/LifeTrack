import { useState } from "react";
import { Button, TextInput } from "@mantine/core";
import { hasLength, isEmail, useForm } from "@mantine/form";

function Form() {
  const form = useForm({
    mode: "controlled",
    initialValues: { name: "", email: "" },
    validate: {
      name: hasLength({ min: 3 }, "Must be at least 3 characters"),
      email: isEmail("Invalid email"),
    },
  });
  const [submittedValues, setSubmittedValues] = useState<
    typeof form.values | null
  >(null);

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={form.onSubmit(setSubmittedValues)}>
        <TextInput
          {...form.getInputProps("name")}
          label="Name"
          placeholder="Name"
        />
        <TextInput
          {...form.getInputProps("email")}
          mt="md"
          label="Email"
          placeholder="Email"
        />
        <Button type="submit" mt="md">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Form;
