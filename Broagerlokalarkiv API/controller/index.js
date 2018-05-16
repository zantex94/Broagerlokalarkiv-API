const answer = require('./answer');
const game = require('./game');
const gameQuestion = require('./gamequestion');
const question = require('./question');
const roundQuestion = require('./roundquestion');

const router = require('express').Router();
const bodyParser = require('body-parser').json;


router.use('/answer', answer)
router.use('/game', game);
router.use('/gamequestion', gameQuestion);
router.use('/question', question);
router.use('/roundquestion', roundQuestion);
router.use(bodyParser);







