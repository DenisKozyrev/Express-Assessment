import express from "express";
import bodyParser from "body-parser";
import { create } from "express-handlebars";
import apiRouter from "./src/modules/api/api.router.js";
import { getSpan } from "./src/helpers.js";
import { get404Page } from "./src/modules/api/api.controller.js";

const app = express();

const hbs = create({
  helpers: {
    getSpan,
  },
  extname: ".hbs",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "src/views");

app.use(bodyParser.urlencoded());

app.use((req, res, next) => {
  req.c = 18;
  next();
});

app.use("/api", apiRouter);

app.use(get404Page);

app.listen(3000);
