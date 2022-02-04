const Router = require('express');
const router =  new Router();
const feedbackController = require('../controller/feedback.controller');

router.post('/feedback', feedbackController.createFeedback);
router.get('/feedback', feedbackController.getFeedback);

module.exports = router;