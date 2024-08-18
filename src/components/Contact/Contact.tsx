import {
  Container,
  Group,
  Badge,
  TextInput,
  Textarea,
  SimpleGrid,
  Title,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "./Contact.module.css";

const Contact = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
      message: (value) => value.trim().length < 2,
    },
  });

  const handleFormSubmit = async (values: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    console.log(values);
    const { name, email, subject, message } = values;
    const res = await fetch("/api/v1/form/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    if (res.ok) {
      form.reset();
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message, please try again later.");
    }
  };

  return (
    <Container id="contact" className={classes.wrapper} size="md">
      <form onSubmit={form.onSubmit(handleFormSubmit)}>
        <Group justify="center">
          <Badge variant="filled" size="lg">
            Contact
          </Badge>
        </Group>
        <Title
          order={2}
          size="h1"
          style={{ fontFamily: "Greycliff CF, var(--mantine-font-family)" }}
          fw={900}
          ta="center"
        >
          Get In Touch
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps("email")}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps("subject")}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps("message")}
        />

        <Group justify="center" mt="xl">
          <Button type="submit" size="md">
            Send Message
          </Button>
        </Group>
      </form>
    </Container>
  );
};

export default Contact;
