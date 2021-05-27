const express = require('express');

require('dotenv/config');

const routes = require('./routes');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, function() {
  console.log('listening on PORT: ' + PORT);
});
