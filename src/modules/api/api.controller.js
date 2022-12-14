export const getHomePage = (req, res) => {
  if (!!Object.keys(req.query).length) {
    res.render("home", {
      title: "home page",
      queryParams: { ...req.query, c: req.c },
    });
  } else {
    res.render("home", { title: "home page" });
  }
};

export const postJson = (req, res) => {
  const { a, b } = req.body;
  res.json({ a, b, result: +a + +b });
};

export const getImage = (req, res) => {
  res.sendFile("../src/screenshot.png");
};

export const get404Page = (req, res) => {
  res.status(404).render("404", { title: "404 page" });
};
