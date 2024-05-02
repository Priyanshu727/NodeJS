const express = require('express');

const port = 9008;

const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    return res.render('index');
})
app.get('/about', (req, res) => {
    return res.render('about');
})
app.get('/contact', (req, res) => {
    return res.render('contact');
})

app.listen(port, (err) => {
    if (err) {
        console.log("server is not working in port.")
        return false;
    }
    console.log("server is start in port:-" + port);
});