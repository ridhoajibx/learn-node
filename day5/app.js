const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongodb = "mongodb+srv://ckmobile:ckmobile123@cluster0.l0hyp.mongodb.net/items-database?retryWrites=true&w=majority";
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('connected!');
    app.listen(3000);
}).catch((err) => {
    console.log(err);
    app.listen(3000);
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const items = [
        { name: 'Book', price: 10000 },
        { name: 'Phone', price: 5000000 },
        { name: 'Laptop', price: 3000000 },
    ];
    res.render('index', { items });
});

app.get('/add-item', (req, res) => {
    res.render('add-item');
});

app.use('/', (req, res) => {
    res.render('error');
});