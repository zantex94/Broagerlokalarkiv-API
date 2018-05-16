const router = require('express').Router();
const bodyParser = require('body-parser').json();

const all = require('./all');
const single = require('./single');
const post = require('./post');

router.get('/', all);
router.get('/:questionId', single);
router.post('/', bodyParser, post);

module.exports = router;




