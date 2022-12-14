import express from "express";
import { getHomePage, postJson, getImage } from "./api.controller.js";

const apiRouter = express.Router();

// const homePageUrl = new URL("../../views/home.html", import.meta.url).pathname;

// render html using sendFile
// apiRouter.get("/api", (req, res) => {
//   res.sendFile(homePageUrl);
// });

apiRouter.get("/", getHomePage);

apiRouter.post("/", postJson);

apiRouter.get("/image", getImage);

export default apiRouter;
