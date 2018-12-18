const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require("body-parser");

// in order to read HTTP POST data, we have to use "body-parser" 
// node module.body - parser is a piece of express middleware 
// that reads a form's input and stores it as a javascript object 
// accessible through req.body
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

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
];

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/books", (req, res) => {
    
    res.render("books", {books:books});
});

app.post("/books", (req, res) => {
    // res.send("You hit the post page")
    //get data from form and add to book array
    let bookTitle = req.body.bookTitle;
    let author = req.body.author;
    let image = req.body.image;
    let newBook = {
        bookTitle : bookTitle,
        author: author,
        image: image
    }
    books.push(newBook);
    //redirect back to book page
    res.redirect("/books");
});

app.get("/books/new", (req, res) => {
    res.render("new");
});

app.listen(PORT, process.env.IP, () => {
    console.log("Books corner server has started!!!");
})