const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');
const controller = require('./controllers');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });
const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(controller);

//Sync sequelize models to the database, then turn on the server
sequelize.sync({ force:false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
