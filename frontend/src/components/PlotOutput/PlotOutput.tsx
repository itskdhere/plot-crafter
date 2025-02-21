import { useEffect, useRef, useContext } from "react";
import { Container, Fieldset, Group, Button } from "@mantine/core";
import Markdown from "react-markdown";
import CopyToClipBtn from "../CopyToClipBtn";
import { IconPlus } from "@tabler/icons-react";
import { PlotContext } from "../../pages/AppPage/AppPage";

function PlotOutput() {
  const { plotOutput, setIsCrafting } = useContext(PlotContext);
  const plotOutputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (plotOutput === "") return;
    if (!plotOutputRef?.current) return;
    plotOutputRef.current.scrollIntoView({ behavior: "smooth" });
  }, [plotOutput]);

  return (
    <Container mt="md" mb="md">
      <Fieldset legend="Plot" radius="md">
        <Group justify="center">
          <Button
            variant="gradient"
            gradient={{ from: "pink", to: "red", deg: 90 }}
            leftSection={<IconPlus size={20} />}
            justify="center"
            size="md"
            radius="xl"
            onClick={() => setIsCrafting(false)}
          >
            New Plot
          </Button>
          <CopyToClipBtn copyData={plotOutput} />
        </Group>
        <Group mt="md" gap={0} ref={plotOutputRef}>
          <Markdown skipHtml={true}>{plotOutput}</Markdown>
        </Group>
      </Fieldset>
    </Container>
  );
}

export default PlotOutput;
