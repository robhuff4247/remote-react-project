/// Obsolete, test server used for early app development

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
});

app.listen(3030, () => console.log('API is running on http://localhost:3030/login'));
