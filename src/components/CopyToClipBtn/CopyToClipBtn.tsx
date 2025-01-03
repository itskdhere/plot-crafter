import { Button, rem, Tooltip } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { IconCopy, IconCheck } from "@tabler/icons-react";

interface ICopyToClipBtnProps {
  copyData: string;
}

function CopyToClipBtn(props: ICopyToClipBtnProps) {
  const { copyData } = props;
  const clipboard = useClipboard();

  return (
    <Tooltip
      label="Plot copied!"
      offset={5}
      position="bottom"
      radius="xl"
      transitionProps={{ duration: 100, transition: "slide-down" }}
      opened={clipboard.copied}
    >
      <Button
        variant="light"
        radius="xl"
        size="md"
        onClick={() => clipboard.copy(copyData)}
        leftSection={
          clipboard.copied ? (
            <IconCheck
              style={{ width: rem(20), height: rem(20) }}
              stroke={1.5}
            />
          ) : (
            <IconCopy
              style={{ width: rem(20), height: rem(20) }}
              stroke={1.5}
            />
          )
        }
        styles={{
          root: { paddingRight: rem(14), height: rem(48) },
          // section: { marginLeft: rem(22) },
        }}
      >
        Copy Plot
      </Button>
    </Tooltip>
  );
}

export default CopyToClipBtn;
