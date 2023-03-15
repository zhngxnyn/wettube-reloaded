import express from "express";
import { upload, edit, see, deleteVideo } from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:potato", see);
videoRouter.get("/:potato/edit", edit);
videoRouter.get("/:potato/delete", deleteVideo);

export default videoRouter;
