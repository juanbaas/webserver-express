const { text } = require('express');
const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers.js');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {


    res.render('home', {
        nombre: 'juAn',
        anio: new Date().getFullYear()
    });
})

app.get('/about', (req, res) => {


    res.render('about');
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto 300 ${port}`);
});