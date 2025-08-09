const express = require('express');
const app = express();
const Connection = require('./database/db');
const dotenv = require('dotenv');
dotenv.config();

Connection();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});