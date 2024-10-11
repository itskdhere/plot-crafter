import { Button, ButtonProps } from "@mantine/core";
import classes from "./AuthPage.module.css";
import { GithubIcon } from "@mantinex/dev-icons";
import GoogleIcon from "./icons/Google";
import FacebookIcon from "./icons/Facebook";

const GoogleButton = (
  props: ButtonProps & React.ComponentPropsWithoutRef<"button">
) => {
  return (
    <Button
      leftSection={<GoogleIcon style={{ width: "1.2rem", height: "1.2rem" }} />}
      className={classes.btn}
      variant="default"
      {...props}
    />
  );
};

const FacebookButton = (
  props: ButtonProps & React.ComponentPropsWithoutRef<"button">
) => {
  return (
    <Button
      leftSection={
        <FacebookIcon style={{ width: "1.2rem", height: "1.2rem" }} />
      }
      className={classes.btn}
      variant="default"
      {...props}
    />
  );
};

const GithubButton = (
  props: ButtonProps & React.ComponentPropsWithoutRef<"button">
) => {
  return (
    <Button
      leftSection={<GithubIcon style={{ width: "1.2rem", height: "1.2rem" }} />}
      className={classes.btn}
      variant="default"
      {...props}
    />
  );
};

export { GoogleButton, FacebookButton, GithubButton };
