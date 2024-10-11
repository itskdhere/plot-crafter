import { useContext } from "react";
import { Container, Fieldset, Group, Text } from "@mantine/core";
import CopyToClipBtn from "../CopyToClipBtn";
import { PlotContext } from "../../pages/AppPage/AppPage";

function PlotOutput() {
  const { plotOutput } = useContext(PlotContext);

  return (
    <Container mt="md" mb="md">
      <Fieldset legend="Plot" radius="md">
        <Group justify="center">
          <CopyToClipBtn copyData={plotOutput} />
        </Group>
        <Group mt="md">
          <Text size="md">{plotOutput}</Text>
        </Group>
      </Fieldset>
    </Container>
  );
}

export default PlotOutput;
