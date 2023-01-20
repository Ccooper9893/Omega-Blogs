const express = require('express');
const sequelize = require('./config/connection');
const apiRoutes = require('./controllers/api');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);
//Sync sequelize models to the database, then turn on the server
sequelize.sync({ force:false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
