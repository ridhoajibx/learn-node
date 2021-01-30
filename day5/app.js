const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Item = require('./model/items');
const mongodb = "mongodb+srv://ckmobile:ckmobile123@cluster0.l0hyp.mongodb.net/items-database?retryWrites=true&w=majority";

app.use(express.urlencoded({ extended: true }));
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected!');
        app.listen(3000);
    }).catch((err) => {
        console.log(err);
        app.listen(3000);
    });

app.set('view engine', 'ejs');

// Create new data
app.get('/create-item', (req, res) => {
    const item = new Item({
        name: 'phone',
        price: 5000000
    })
    item.save().then((result) => res.send(result));
})

// Get all data
app.get('/get-items', (req, res) => {
    Item.find().then((items) => {
        res.render('index', { items })
    }).catch((err) => {
        console.log(err);
    });
})

// Get data by ID
app.get('/get-item', (req, res) => {
    Item.findById("6011b1a52370483467bd4f19").then((item) => res.send(item)).catch((err) => {
        console.log(err);
    })
});

app.get('/items/:id', (req, res) => {
    const id = req.params.id;
    Item.findById(id).then((item) => {
        res.render('detail-item', { item })
    }).catch((err) => console.log(err))
})

// Delete
app.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    Item.findByIdAndDelete(id).then((item) => {
        res.json({ redirect: '/'})
    })
})

// Put/update
app.put('/items/:id', (req, res) => {
    const id = req.params.id;
    Item.findByIdAndUpdate(id, req.body).then(result => {
        res.json({ msg: 'Updated Successfully' })
    })
})

app.get('/add-item', (req, res) => {
    res.render('add-item');
});

app.post('/items', (req, res) => {
    console.log(req.body);
    const item = Item(req.body);
    item.save().then(() => {
        res.redirect('/get-items');
    }).catch((err) => console.log(err));
})

// get redirect
app.get('/', (req, res) => {
    res.redirect('/get-items');
});

// Error
app.use('/', (req, res) => {
    res.render('error');
});