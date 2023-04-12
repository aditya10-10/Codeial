const express = require('express');
const { app } = require(".");

app.use('/css', express.static(__dirname + './assets/css'));
app.use('/js', express.static(__dirname + './assets/css'));
app.use('/img', express.static(__dirname + './assets/img'));
