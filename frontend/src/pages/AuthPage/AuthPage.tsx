import { Container, Group, Paper, Title, Text } from "@mantine/core";
import { GoogleButton, FacebookButton, GithubButton } from "./SocialButtons";
import { Link } from "react-router-dom";
import classes from "./AuthPage.module.css";

const AuthPage = () => {
  return (
    <Container size={420} className={classes.authPage}>
      <Title ta="center" className={classes.title}>
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
      </Title>

      <Paper withBorder shadow="md" p={25} mt={35} radius="md">
        <Text size="lg" ta="center" mt={5}>
          Sign-Up / Sign-In
        </Text>
        <Group justify="center" p="lg">
          <GoogleButton>Continue with Google</GoogleButton>
          <GithubButton>Continue with GitHub</GithubButton>
          <FacebookButton>Continue with Facebook</FacebookButton>
        </Group>
      </Paper>
    </Container>
  );
};

export default AuthPage;
