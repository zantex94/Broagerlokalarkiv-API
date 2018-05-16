const router = require('express').Router();

const all = require('./all');
const single = require('./single');
const post = require('./post');

console.log("inside Question");

router.get('/', all);
router.get('/:questionId', single);
router.post('/', post);

module.exports = router;




