import { Text, Container, ActionIcon, Group, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconHeartFilled,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const data = [
  {
    title: "About",
    links: [
      { label: "Home", link: "#home" },
      { label: "Features", link: "#features" },
      { label: "FAQ", link: "#faq" },
      { label: "Contact", link: "#contact" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "GitHub", link: "https://github.com/itskdhere/plot-crafter" },
      {
        label: "Contribute",
        link: "https://github.com/itskdhere/plot-crafter",
      },
      {
        label: "Releases",
        link: "https://github.com/itskdhere/plot-crafter/releases",
      },
      {
        label: "Changelog",
        link: "https://github.com/itskdhere/plot-crafter/commits/main/",
      },
    ],
  },
];

const Footer = () => {
  const groups = data.map((group) => {
    const links = group.links.map((link) => (
      <Link key={link.label} to={link.link}>
        <Text className={classes.link}>{link.label}</Text>
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text
            inherit
            className={classes.app_name}
            size="xl"
            variant="gradient"
            gradient={{ from: "pink", to: "yellow", deg: 90 }}
          >
            PlotCrafter
          </Text>
          <Text size="sm" c="dimmed" className={classes.description}>
            Craft your own plot using AI. Just provide a prompt and let the AI
            do the rest. It's that simple!
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="md">
          Made with{" "}
          <IconHeartFilled
            size={18}
            color="var(--mantine-color-orange-7)"
            style={{ transform: "translateY(3.5px)" }}
          />{" "}
          by itskdhere
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <Link to="https://github.com/itskdhere" target="_blank">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandGithub
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Link>
          <Link to="https://linkedin.com/in/itskdhere" target="_blank">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandLinkedin
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Link>
          <Link to="https://twitter.com/itskdhere" target="_blank">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandTwitter
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Link>
        </Group>
      </Container>
    </footer>
  );
};

export default Footer;
