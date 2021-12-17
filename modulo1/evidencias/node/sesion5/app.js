const express = require('express');
const app = express();


const PORT = 3001;

app.use('/api', require('./routes'));

app.listen(PORT, () => console.log('conectado puerto: ', PORT));