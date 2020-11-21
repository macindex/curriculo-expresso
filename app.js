const express = require('express');
const port = 3000;
const app = express();
const path = require('path');
const CurriculoController = require('./controllers/curriculo-controller');

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.get('/', function(req, res, next) {
//     res.render('index',{
//         title: "Meu primeiro servidor Express",
//         version: "0.0.0"
//     });
// });

app.get('/curriculo',(req, res, next) => {
    const curriculoData = CurriculoController.getData();
    res.render('curriculo', curriculoData);
});

app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});



