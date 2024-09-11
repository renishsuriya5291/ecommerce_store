const express = require('express');
const connectToMongo = require('./src/config/connectToMongo');
const cors = require("cors")
const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

const v1Routes = require('./src/routes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connectToMongo();

app.use('/api', v1Routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
