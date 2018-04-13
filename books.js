const Book = require('./mongoose-models');

module.exports = (app) => {

    // add a new book
    app.post('/books', (req, res) => {
        if(!req.body.title || !req.body.author || !req.body.genre) {
            res.status(400).send({message: "Fill in all fields!"});
        } else {
            const book = new Book({
                title: req.body.title,
                author: req.body.author,
                genre: req.body.genre
            });
            book.save()
                .then(data => res.json(data))
                .catch(err => {
                    res.status(500).send({message: err.message || "Oops: Something went wrong!"})
                });
        }
    });


    // retrieve all books:
    app.get('/books', (req, res) => {
        Book.find()
            .then(books => res.json(books))
            .catch(err => {
                res.status(500).send({message: err.message || "Oops: Something went wrong!"})
            });
    });


    // retrieve book by title:
    app.get('/books/:title', (req, res) => {
        Book.findOne({title: req.params.title}, (err, book) => {
            if(err || !book) {
                res.status(500).send({message: err.message || "Oops: Something went wrong!"});
            } else {
                res.send(book);
            }
        })
    });

    // retrieve book by author:
    app.get('/books/:author', (req, res) => {
        Book.findOne({author: req.params.author}, (err, book) => {
            if(err || !book) {
                res.status(500).send({message: err.message || "Oops: Something went wrong!"});
            } else {
                res.send(book);
            }
        })
    });

    // retrieve book by genre:
    app.get('/books/:genre', (req, res) => {
        Book.findOne({genre: req.params.genre}, (err, book) => {
            if(err || !book) {
                res.status(500).send({message: "Oops: Something went wrong!"});
            } else {
                res.send(book);
            }
        })
    });







};