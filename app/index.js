const express = require("express");
const bookList = require("./book");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./pages");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("pages/home.html", { root: __dirname });
});

app.get("/add-book", (req, res) => {
  res.sendFile("pages/add-book.html", { root: __dirname });
});

app.post("/add-book", (req, res) => {
  let title = req.body.title;
  let author = req.body.author;
  let year = req.body.year;
  console.log(`Adding book: ${title}, Author: ${author}, Year: ${year}`);
  res.redirect("/add-book");
});

app.get("/book-list", (req, res) => {
  res.render("books.ejs", { bookList });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
