const express = require('express');

const app = express();

require('./routes/auth-routes.js')(app);

const PORT = process.env.PORT || 3000
app.listen(PORT);