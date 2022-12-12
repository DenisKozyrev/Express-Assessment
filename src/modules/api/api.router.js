import express from "express";

const apiRouter = express.Router();

// const homePageUrl = new URL("../../views/home.html", import.meta.url).pathname;

// render html using sendFile
// apiRouter.get("/api", (req, res) => {
//   res.sendFile(homePageUrl);
// });

apiRouter.get("/api", (req, res) => {
  res.render("home", { title: "home page" });
});

export default apiRouter;
