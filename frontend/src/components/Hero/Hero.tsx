import { Title, Text, Button, Container } from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Dots } from "./Dots";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <Container id="/" size={1400} className={classes.wrapper}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          <Text
            component="span"
            inherit
            variant="gradient"
            gradient={{ from: "pink", to: "yellow" }}
          >
            Craft
          </Text>{" "}
          your own{" "}
          <Text
            component="span"
            inherit
            variant="gradient"
            gradient={{ from: "yellow", to: "pink" }}
          >
            Plot
          </Text>{" "}
          using{" "}
          <Text
            component="span"
            inherit
            variant="gradient"
            gradient={{ from: "violet", to: "pink" }}
          >
            AI
          </Text>
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Just provide a basic details and let the AI do the rest. It's that
            simple!
          </Text>
        </Container>

        <div className={classes.controls}>
          <Link to="/signup">
            <Button
              className={classes.control}
              size="lg"
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
            >
              Get Started
              <IconArrowNarrowRight size={25} style={{ marginLeft: "10px" }} />
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
