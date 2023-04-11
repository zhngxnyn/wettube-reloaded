import express from "express";
import {
  upload,
  edit,
  watch,
  deleteVideo,
} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get("/upload", upload); // ("/:id", see); 아래에 작성하게 되면 upload를 id로 인식됨
videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;
