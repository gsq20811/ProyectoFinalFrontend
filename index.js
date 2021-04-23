'use strict'

const express = require('express');
const path = require('path');

const app = express();
const name_project = "dist";

app.use(express.static(`${__dirname}/${name_project}`));

app.get('*', function(req, res) {
    return res.sendFile(path.join(`${__dirname}/${name_project}/index.html`));
});

app.listen(process.env.PORT || 4400);