const exp = require("constants");
const express = require("express");
const app = express();

const port = 3009;

app.use(express.static("public"));

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
  //   if (err) {
  //     res.status(500).send("Internal Error");
  //   } else {
  //     res.send(`<p><a href="/views/about.html">About</a></p>`);
  //   }
});
app.get("/work", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});
app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
  res.send("/images/kingdog.jpg");
});
app.get("*", (req, res) => {
  res.send("Page not found - 404");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
