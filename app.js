const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const errorController = require('./controllers/error');
// const isAuth = require('./middleware/is-auth');

app.set('view engine', 'ejs');
app.set('views', 'views');

const erpRoutes = require('./routes/erp');
const crmRoutes = require('./routes/crm');
const homeRoutes = require('./routes/home');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(homeRoutes);

app.use(errorController.get404);

app.listen(3000);
