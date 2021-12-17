const express = require('express');
const app = express();
const PORT = 3001;
const helmet = require('helmet');
const cors = require('cors');

app.use(helmet());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/', (req, res) => res.json({message: 'Hello'}));

app.use('/api', require('./routes'))

app.listen(PORT, () => console.log('Express ', PORT));