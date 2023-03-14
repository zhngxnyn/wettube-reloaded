import express from "express";
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";

const globalRouter = express.Router(); // router: url를 그룹화 해줌

const handleHome = (req, res) => res.send("Home");
const handleJoin = (req, res) => res.send("Join");

globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;
