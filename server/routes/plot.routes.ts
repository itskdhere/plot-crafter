import { Router } from "express";
import { craftPlot } from "../controllers/plot.controller";
import validate from "../middlewares/validate";
import { plotSchema } from "../lib/schemas";

const plotRouter = Router();

plotRouter.route("/craft").post(validate(plotSchema), craftPlot);

export default plotRouter;
