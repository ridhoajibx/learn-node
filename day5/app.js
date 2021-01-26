const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.listen(3000);

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