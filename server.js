const express = require('express');

//const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
//server.use('/api/schemes', SchemeRouter);

server.get("/api", (req, res) => {
    res.status(200).json({ api: "API is ready to party"})
})

module.exports = server;