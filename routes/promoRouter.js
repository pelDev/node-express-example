const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.statusCode = 200;
    res.end('WIll show you all the available promotions!');
})
.post((req, res, next) => {
    res.statusCode = 200;
    res.end('Will create a new promotion for you!');
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation is not supported');
})
.delete((req, res, next) => {
    res.statusCode = 200;
    res.end('Deleting all the promotions from the Database!');
});

promoRouter.route('/:promoId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.statusCode = 200;
    res.end('WIll show your promotion: ' + req.params.promoId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST Operation not supported on /promotions/' + req.params.promoId);
})
.put((req, res, next) => {
    res.statusCode = 200;
    res.end('Updating your promotion: ' + req.params.promoId);
})
.delete((req, res, next) => {
    res.statusCode = 200;
    res.end('Deleting promotion: ' + req.params.promoId);
});



module.exports = promoRouter;