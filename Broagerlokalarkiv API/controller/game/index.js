const router = require('express').Router();

const all = require('./all');
const single = require('./single');
const post = require('./post');

console.log("inside Game");

router.get('/', all);
router.get('/:gameId', single);
router.post('/', post);

module.exports = router;




