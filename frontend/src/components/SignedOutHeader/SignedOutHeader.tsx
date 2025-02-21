import {
  Group,
  Button,
  Text,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import classes from "./SignedOutHeader.module.css";

const SignedOutHeader = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link to="/" className={classes.app_link}>
            <Text
              inherit
              className={classes.app_name}
              size="xl"
              variant="gradient"
              gradient={{ from: "pink", to: "yellow", deg: 90 }}
            >
              PlotCrafter
            </Text>
          </Link>

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link to="#/" className={classes.link}>
              Home
            </Link>
            <Link to="#features" className={classes.link}>
              Features
            </Link>
            <Link to="#faq" className={classes.link}>
              FAQ
            </Link>
            <Link to="#contact" className={classes.link}>
              Contact
            </Link>
          </Group>

          <Group visibleFrom="sm">
            <Link to="/signin" className={classes.app_link}>
              <Button variant="default">Sign in</Button>
            </Link>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Menu"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Link to="#/" className={classes.link}>
            Home
          </Link>
          <Link to="#features" className={classes.link}>
            Features
          </Link>
          <Link to="#faq" className={classes.link}>
            FAQ
          </Link>
          <Link to="#contact" className={classes.link}>
            Contact
          </Link>

          <Divider my="sm" />
          <Link to="/signin" className={classes.app_link}>
            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Sign In</Button>
            </Group>
          </Link>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default SignedOutHeader;
