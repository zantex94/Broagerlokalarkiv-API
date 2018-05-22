const answer = require('./answer');
const game = require('./game');
const gameQuestion = require('./gamequestion');
const question = require('./question');
const roundQuestion = require('./roundquestion');

const router = require('express').Router();
const bodyParser = require('body-parser').json;

// this method should always be in this index to gain Access-Control-Allow-Origin
router.use(function (req, res, next) {
    // added to response
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, content-type, Access-Control-Allow-Origin");
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTION');
    //console.log("some action happens!");
    next();
});

router.use('/answers', answer)
router.use('/games', game);
router.use('/gamequestions', gameQuestion);
router.use('/questions', question);
router.use('/roundquestions', roundQuestion);
router.use(bodyParser);

module.exports = router;





