const express = require("express");

//Database
const Database = require("./Database")

//Initialization
const booky = express();

/*
Route       : /
Description : Get all books
Access      : PUBLIC
Parameter   : none
Methods     : GET
*/

booky.get("/", (req,res) => {
    return res.json({ books: Database.books });
});

/*
Route       : /is
Description : Get specific books based on ISBN
Access      : PUBLIC
Parameter   : isbn
Methods     : GET
*/

booky.get("/is/:isbn", (req,res) => {
    const getSpecificBook = Database.books.filter(
        (book) => book.ISBN === req.params.isbn
    ); 

    if (getSpecificBook.length === 0) {
        return res.json({
            error: `No book found for the ISBN of ${req.params.isbn}`,
        });
    }

    return res.json({ book: getSpecificBook });
});

/*
Route       : /c
Description : Get specific books based on category
Access      : PUBLIC
Parameter   : isbn
Methods     : GET
*/

booky.get("/c/:category", (req,res) => {
    const getSpecificBook = Database.books.filter((book) => 
    book.category.includes(req.params.category)
    );

    if (getSpecificBook.length === 0) {
        return res.json({
            error: `No book found for the category of ${req.params.category}`,
        });
    }

    return res.json({ book: getSpecificBook });
})

/*
Route       : /
Description : Get specific books based on languages
Access      : PUBLIC
Parameter   : languages
Methods     : GET
*/


/*
Route       : /author
Description : get all authors
Access      : PUBLIC
Parameter   : NONE
Methods     : GET
*/

booky.get("/author", (req,res) => {
    return res.json({ authors: Database.author })
});

/*
Route       : /author/book
Description : get all authors based on books
Access      : PUBLIC
Parameter   : isbn
Methods     : GET
*/

booky.get("/author/book/:isbn", (req,res) => {
    const getSpecificAuthor = Database.authors.filter((author) => 
    author.books.includes(req.params.isbn)
    );

    if (getSpecificAuthor.length === 0) {
        return res.json({
            error: `No author found for the ISBN of ${req.params.isbn}`,
        });
    }

    return res.json({ authors: getSpecificAuthor });
})

booky.listen(3000, () => console.log("Hey Sever Is Running...!"));