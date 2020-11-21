const express = require('express');
const router = express.Router();
const CurriculoController = require('../controllers/curriculo-controller');

app.get('/curriculo',(req, res, next) => {
    const curriculoData = CurriculoController.getData();
    res.render('curriculo', curriculoData);
});

module.exports = router;
