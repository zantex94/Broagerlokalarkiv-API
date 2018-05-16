const router = require('express').Router();
// bodyparser is used to post a body and only a body
const bodyParser = require('body-parser').json();

const all = require('./all');
const single = require('./single');
const post = require('./post');


router.get('/', all);
router.get('/:answerId', single);
router.post('/', bodyParser, post);


module.exports = router;




