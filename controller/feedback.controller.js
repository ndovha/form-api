const db = require('../db');

class FeedbackController {
    async createFeedback(req, res) {
        const { name, email, message } = req.body;
        const newFeedback = await db.query('INSERT INTO feedback ( name, email, message) values ($1, $2, $3) RETURNING *',
        [ name, email, message])
       res.json(newFeedback.rows[0])
        
    }
    async getFeedback(req, res) {
        const feedbacks = await db.query('SELECT * FROM feedback');
        res.json(feedbacks.rows)
    }
}


module.exports = new FeedbackController;