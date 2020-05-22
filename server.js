const express = require('express');
const helmet = require('helmet');

const recipesRouter = require('./recipesRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', recipesRouter);

server.get("/api", (req, res) => {
    res.status(200).json({ api: "API is ready to party"})
})


module.exports = server;