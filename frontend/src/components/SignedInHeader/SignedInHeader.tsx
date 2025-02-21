import cx from "clsx";
import { useState } from "react";
import {
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  rem,
  useMantineTheme,
  Stack,
} from "@mantine/core";
import {
  IconChevronDown,
  IconPlus,
  IconHistory,
  IconSettings,
  IconLogout,
  IconStar,
} from "@tabler/icons-react";
import classes from "./SignedInHeader.module.css";

const user = {
  name: "KD",
  email: "kd@itskdhere.eu.org",
  image:
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
};

function SignedInHeader() {
  const theme = useMantineTheme();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <div className={classes.header}>
      <Container p="xs" size="md">
        <Group justify="space-between">
          <Text
            inherit
            className={classes.app_name}
            size="xl"
            variant="gradient"
            gradient={{ from: "pink", to: "yellow", deg: 90 }}
          >
            PlotCrafter
          </Text>
          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: "pop-top-right" }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, {
                  [classes.userActive]: userMenuOpened,
                })}
              >
                <Group gap={7}>
                  <Avatar
                    src={user.image}
                    alt={user.name}
                    radius="xl"
                    size={30}
                  />
                  <IconChevronDown
                    style={{
                      width: rem(18),
                      height: rem(18),
                      marginTop: rem(3),
                    }}
                    stroke={1.5}
                  />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Stack align="center" p={15} gap={0}>
                <Avatar
                  src={user.image}
                  alt={user.name}
                  radius="xl"
                  size={50}
                />
                <Text fw={400} size="md" p={0}>
                  {user.name}
                </Text>
                <Text fw={400} size="sm" p={0} c="dimmed">
                  {user.email}
                </Text>
              </Stack>
              <Menu.Divider />
              <Menu.Item
                leftSection={
                  <IconPlus
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.blue[6]}
                    stroke={1.5}
                  />
                }
              >
                New
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconHistory
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.red[6]}
                    stroke={1.5}
                  />
                }
              >
                History
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconStar
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.yellow[6]}
                    stroke={2}
                  />
                }
              >
                Saved
              </Menu.Item>
              <Menu.Divider />
              <Menu.Label>Account</Menu.Label>
              <Menu.Item
                leftSection={
                  <IconSettings
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={2}
                  />
                }
              >
                Settings
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconLogout
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={2}
                  />
                }
              >
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
    </div>
  );
}

export default SignedInHeader;
