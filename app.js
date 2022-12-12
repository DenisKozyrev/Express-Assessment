import express from "express";
import bodyParser from "body-parser";
import apiRouter from "./src/modules/api/api.router.js";
import { engine } from "express-handlebars";

const app = express();

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "src/views");

app.use(bodyParser.urlencoded());

app.use(apiRouter);

app.use((req, res) => {
  res.status(404).render("404", { title: "404 page" });
});

app.listen(3000);
