const express = require("express");
const expressLayout = require("express-ejs-layouts");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayout);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Ideal Zillion Global",
    css: "css/style.css",
    layout: "layouts/main-layout",
  });
});

app.get("/vocal-class", (req, res) => {
  res.render("vocal-class", {
    title: "Vocal Class",
    css: "css/detail.css",
    layout: "layouts/main-layout",
  });
});

app.get("/record", (req, res) => {
  res.render("record", {
    title: "Record Your Own Song",
    css: "css/detail.css",
    layout: "layouts/main-layout",
  });
});

app.get("/music-theory", (req, res) => {
  res.render("music-theory", {
    title: "Music Theory",
    css: "css/detail.css",
    layout: "layouts/main-layout",
  });
});

app.get("/booking", (req, res) => {
  res.render("booking", {
    title: "Book Your Course",
    css: "css/booking.css",
    layout: "layouts/main-layout",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
