const books = [
    {
        ISBN: "1234book",
        title: "Getting statred with MERN",
        pubDate: "2021-07-07",
        language: "en",
        numPage: 250,
        author: [1,2],
        publications: [1],
        category: ["tech", "programming", "education"],
    },

];


const authors = [
    {
        id: 1,
        name: "Pavan",
        books: ["1234book"]
    },
    {
        id: 2,
        name: "Elon",
        books: ["1234book"]
    },
];


const publications = [
    {
        id: 1,
        name: "WriteX",
        books: "1234book",
    },
];

module.exports = {books, authors, publications};