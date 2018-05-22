const router = require('express').Router();
const bodyParser = require('body-parser').json();

const all = require('./all');
const single = require('./single');
const post = require('./post');
const remove = require('./delete');

router.get('/', all);
router.get('/:questionId', single);
router.post('/', bodyParser, post);
router.delete('/:questionId', remove);

module.exports = router;




