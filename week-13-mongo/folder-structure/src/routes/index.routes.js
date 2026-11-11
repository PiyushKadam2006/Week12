import { Router } from "express";
import notesRouter from "./notes.routes.js";
import authRouter from "./auth.routes.js";

const indexRouter = Router();

indexRouter.use("/notes",notesRouter);
indexRouter.use("/auth",authRouter);

export default indexRouter;