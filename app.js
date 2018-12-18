const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/books", (req, res) => {
    let books = [
        {
            author: "Jessica Townsend",
            bookTitle: "Nevermoor",
            image: "https://hachette.azureedge.net/books/thumbnails/9780734418074.jpg?v=17&scale=both&width=440"
        },
        {
            author: "Jessica Townsend",
            bookTitle: "Wundersmith",
            image: "https://www.slashfilm.com/wp/wp-content/images/Nevermoor.jpg"
        },
        {
            author: "Jessica Townsend",
            bookTitle: "Wundersmith",
            image: "https://d3ddkgxe55ca6c.cloudfront.net/assets/t1536311294/a/e1/f2/186446-ml-1766811.jpg"
        },
    ]
    res.render("books", {books:books});
});

app.listen(PORT, process.env.IP, () => {
    console.log("Books corner server has started!!!");
})