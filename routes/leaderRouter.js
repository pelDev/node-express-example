const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.statusCode = 200;
    res.end('WIll show you all the available Leaders!');
})
.post((req, res, next) => {
    res.statusCode = 200;
    res.end('Will create a new Leader for you!');
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation is not supported on /leaders');
})
.delete((req, res, next) => {
    res.statusCode = 200;
    res.end('Deleting all the Leaders from the Database!');
});

leaderRouter.route('/:leaderId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.statusCode = 200;
    res.end('WIll show you Leader ' + req.params.leaderId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST Operation not supported on /leaders/' + req.params.leaderId);
})
.put((req, res, next) => {
    res.statusCode = 200;
    res.end('Will update leader: ' + req.params.leaderId);
})
.delete((req, res, next) => {
    res.statusCode = 200;
    res.end('Deleting leader: ' + req.params.leaderId);
});

module.exports = leaderRouter;