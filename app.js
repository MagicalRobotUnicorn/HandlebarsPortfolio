const express = require('express');
const app = express();
const PORT = 3000;

const handlebars = require('express-handlebars');

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
  layoutsDir: `${__dirname}/views/layouts`,
  extname: 'hbs',
  defaultLayout: 'index',
  partialsDir: `${__dirname}/views/partials`
}));

app.use(express.static('public'));

const fakeApi = () => "Return Value!";

function newList() {
  var list = [
    {
      Name: "Henry",
      Profession: "Programmer"
    },
    {
      Name: "Chuck",
      Profession: "Plumber"
    }
  ];

  return list;
}

app.get('/', (req, res) => {
  res.render('main', {layout: 'index', passedValue : newList()});
});

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
