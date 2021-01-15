const express = require('express');
const app = express();
const port = 3000;

var adminName = 'Caitlin';

app.set('view engine', "ejs");

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/admin/:name', (req, res) => {
    res.render('admin', {adminName: req.params.name});
});

app.listen(port,() => {
    console.log('Server is now up!')
});