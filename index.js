const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("Hello World New"));

app.listen(2000);