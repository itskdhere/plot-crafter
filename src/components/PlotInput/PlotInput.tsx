import { useState, useContext } from "react";
import {
  Container,
  Group,
  Fieldset,
  Text,
  TextInput,
  Chip,
  Radio,
  Button,
} from "@mantine/core";
import { IconSparkles } from "@tabler/icons-react";
import { PlotContext } from "../../pages/AppPage/AppPage";

function PlotInput() {
  const [characterName, setCharacterName] = useState<string>("Nala");
  const [characterType, setCharacterType] = useState<string>("Cat");
  const [characterPersonality, setCharacterPersonality] = useState<string>(
    "Nala is a very friendly cat."
  );
  const [characterLocation, setCharacterLocation] =
    useState<string>("Andromeda Galaxy");
  const [plotPremise, setPlotPremise] = useState<string[]>([
    "adventure",
    "love",
  ]);
  const [creativityLevel, setCreativityLevel] = useState<string>("high");
  const [plotLength, setPlotLength] = useState<string>("long");
  const { setPlotInput } = useContext(PlotContext);

  const handleCraftPlot = async () => {
    setPlotInput({
      characterName,
      characterType,
      characterPersonality,
      characterLocation,
      plotPremise,
      creativityLevel,
      plotLength,
    });
  };

  return (
    <Container mt="md" mb="md">
      <Fieldset legend="Plot" radius="md">
        <TextInput
          withAsterisk
          label="What is the name of the character ?"
          value={characterName}
          onChange={(event) => setCharacterName(event.currentTarget.value)}
        />
        <TextInput
          withAsterisk
          mt="md"
          label="What type of character is it ?"
          value={characterType}
          onChange={(event) => setCharacterType(event.currentTarget.value)}
        />
        <TextInput
          withAsterisk
          mt="md"
          label="What personality does the character have ?"
          value={characterPersonality}
          onChange={(event) =>
            setCharacterPersonality(event.currentTarget.value)
          }
        />
        <TextInput
          withAsterisk
          mt="md"
          label="Where does the character live ?"
          value={characterLocation}
          onChange={(event) => setCharacterLocation(event.currentTarget.value)}
        />
        <Text size="sm" fw={500} mt="md" mb="3.4px">
          Select the plot premise(s): <span style={{ color: "red" }}>*</span>
        </Text>
        <Chip.Group multiple value={plotPremise} onChange={setPlotPremise}>
          <Group justify="left">
            <Chip variant="light" radius="sm" value="adventure">
              Adventure
            </Chip>
            <Chip variant="light" radius="sm" value="comedy">
              Comedy
            </Chip>
            <Chip variant="light" radius="sm" value="fantasy">
              Fantasy
            </Chip>
            <Chip variant="light" radius="sm" value="horror">
              Horror
            </Chip>
            <Chip variant="light" radius="sm" value="love">
              Love
            </Chip>
            <Chip variant="light" radius="sm" value="mystery">
              Mystery
            </Chip>
            <Chip variant="light" radius="sm" value="sci-fi">
              Sci-Fi
            </Chip>
            <Chip variant="light" radius="sm" value="thriller">
              Thriller
            </Chip>
          </Group>
        </Chip.Group>

        <Radio.Group
          withAsterisk
          mt="md"
          name="creativityLevel"
          label="Select creativity level:"
          value={creativityLevel}
          onChange={setCreativityLevel}
        >
          <Group mt="xs">
            <Radio value="low" label="Low" />
            <Radio value="high" label="High" checked />
          </Group>
        </Radio.Group>

        <Radio.Group
          withAsterisk
          mt="md"
          name="plotLength"
          label="Select plot length:"
          value={plotLength}
          onChange={setPlotLength}
        >
          <Group mt="xs">
            <Radio value="short" label="Short" />
            <Radio value="long" label="Long" />
          </Group>
        </Radio.Group>

        <Button
          fullWidth
          mt="xl"
          variant="gradient"
          gradient={{ from: "pink", to: "red", deg: 90 }}
          leftSection={<IconSparkles size={20} />}
          rightSection={<IconSparkles size={20} />}
          size="md"
          justify="center"
          radius="xl"
          onClick={handleCraftPlot}
        >
          Craft Plot
        </Button>
      </Fieldset>
    </Container>
  );
}

export default PlotInput;
