const express = require('express');
const app = express();
const port = 3000;

var adminName = 'Caitlin';

app.set('view engine', "ejs");

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/admin/:name', (req, res) => {
    var data = {hobbies: ['sleeping', 'singing', 'eating', 'dreaming']};
    res.render('admin', {adminName: req.params.name, data: data});
});

app.listen(port,() => {
    console.log('Server is now up!')
});