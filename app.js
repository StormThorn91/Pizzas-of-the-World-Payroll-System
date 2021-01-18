const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: true })

var adminName = 'Caitlin';

app.set('view engine', "ejs");

//for ejs files to be able to apply the css filess
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    console.log(req.query);
    res.render('home');
});

app.get('/sign-up', (req, res) => {
    console.log(req.query);
    res.render('sign-up', {qs: req.query});
});

app.post('/sign-up', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.render('sign-up-success', {data: req.body});
});

app.get('/admin/:name', (req, res) => {
    var data = {hobbies: ['sleeping', 'singing', 'eating', 'dreaming']};
    res.render('admin', {adminName: req.params.name, data: data});
});

app.listen(port,() => {
    console.log('Server is now up!')
});