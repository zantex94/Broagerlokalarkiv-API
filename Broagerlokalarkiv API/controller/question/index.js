const router = require('express').Router();
const bodyParser = require('body-parser').json();

const all = require('./all');
const single = require('./single');
const post = require('./post');
const remove = require('./delete');
const put = require('./put');

router.get('/', all);
router.get('/:questionId', single);
router.post('/', bodyParser, post);
router.delete('/:questionId', remove);
router.put('/:questionId', bodyParser, put);

module.exports = router;




