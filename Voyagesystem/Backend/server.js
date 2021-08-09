const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

mongoose.connect("mongodb://localhost/voyagesystemDB", { useNewUrlParser: true, useUnifiedTopology: true });

var PORT = 3000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/vessels', routes);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});