require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());


const censusRoutes = require('./routes/censusRoutes'); // Import the Router


app.use('/', censusRoutes); 



// Connect to the database
sequelize
  .sync()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
