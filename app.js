const express = require('express');
const port = 3000;
const app = express();
const path = require('path');

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
    res.render('index',{
        title: "Meu primeiro servidor Express",
        version: "0.0.0"
    });
});

app.get('/curriculo',(req, res, next) => {
    res.render('curriculo', {
        title: 'Meu currículo',
        name: 'Claudio Holanda',
        profession: 'Software Engineer',
        description: 'Experiência em desenvolvimento de single page applications com JavaScript e frameworks JavaScript, desenvolvimento em projetos pessoais com Angular e React, package managers, transpilers (como Babel), pre processadores CSS (Sass e Stylus), task managers, arquitetura CSS (como BEM e SMACSS), Git, SEO, acessibilidade e usabilidade.',
        experience: [{
            company: 'ASSARTE',
            office: 'Assistente administrativo',
            description: 'Trabalhos administrativo como conferência de mercadorias, recebimento e pagamentos, gerencia de mídias sociais'
        },
        {
            company: 'CSU Cardsystem',
            office: 'Atendimento back-office',
            description: 'Atendimento e suporte de demandas externas de serviço'
        }],
            education: [{
            institution: 'FBV Wyden',
            description: 'Sobrevivência nas ruas'
        }],
        skills: ['backend', 'frontend', 'infra', 'mobile']
    });
});

app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});


