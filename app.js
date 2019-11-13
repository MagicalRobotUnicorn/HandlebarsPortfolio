const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const handlebars = require('express-handlebars');

var allProjects = require('./public/assets/javascript/portfolioData');

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
  layoutsDir: `${__dirname}/views/layouts`,
  extname: 'hbs',
  defaultLayout: 'index',
  partialsDir: `${__dirname}/views/partials`
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('main', {layout: 'index'});
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio', {layout: 'portfolioLayout', allProjects: allProjects});
});

app.get('/contact', (req, res) => {
  res.render('contact', {layout: 'contactLayout'});
});

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});