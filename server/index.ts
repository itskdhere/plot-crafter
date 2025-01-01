import { SignalConstants } from "os";
import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config();

const PROTOCOL = process.env.PROTOCOL || "http";
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;

import app from "./app";

app.listen(PORT, () => {
  app.on("error", (err) => {
    console.error(chalk.bgRedBright("Error: ") + chalk.redBright(err));
  });
  console.log(
    chalk.greenBright(
      `Server is listening on port ${PORT}\nVisit: ${PROTOCOL}://${HOST}:${PORT}`
    )
  );
});

process.on("SIGINT", signalHandler);
process.on("SIGTERM", signalHandler);
process.on("SIGQUIT", signalHandler);

function signalHandler(signal: SignalConstants) {
  console.log(chalk.bgRedBright(`Received ${signal}`));
  console.log(chalk.redBright("Shutting Down Server..."));
  // process.exit();
}
