const answer = require('./answer');
const game = require('./game');
const gameQuestion = require('./gamequestion');
const question = require('./question');
const roundQuestion = require('./roundquestion');

const router = require('express').Router();
const bodyParser = require('body-parser').json;

router.use('/answers', answer)
router.use('/games', game);
router.use('/gamequestions', gameQuestion);
router.use('/questions', question);
router.use('/roundquestions', roundQuestion);
router.use(bodyParser);

module.exports = router;





