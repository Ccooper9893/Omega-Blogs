const express = require('express');
const session = require('express-session');
const path = require('path');
const sequelize = require('./config/connection');
const controller = require('./controllers');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const hbs = exphbs.create({ helpers });
const app = express();
const PORT = process.env.PORT || 3001;

//Setting up session middleware including cookie and connects to our MySQL database
const sess = {
    secret: 'EncryptedSecretPassword',
    // Express session will use cookies by default, but we can specify options for those cookies by adding a cookies property to our session options.
    cookie: {
      // maxAge sets the maximum age for the cookie to be valid. Here, the cookie (and session) will expire after one hour. The time should be given in milliseconds.
      maxAge: 20 * 60 * 1000,
      // httpOnly tells express-session to only store session cookies when the protocol being used to connect to the server is HTTP.
      httpOnly: true,
      // secure tells express-session to only initialize session cookies when the protocol being used is HTTPS. Having this set to true, and running a server without encryption will result in the cookies not showing up in your developer console.
      secure: false,
      // sameSite tells express-session to only initialize session cookies when the referrer provided by the client matches the domain out server is hosted from.
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    // Sets up session store
    store: new SequelizeStore({
      db: sequelize,
    }),
  };

//Registers handlebars as server template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Mounting middleware
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(controller);

//Sync sequelize models to the database, then turn on the server
sequelize.sync({ force:false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
