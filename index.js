require('dotenv').config();
const express = require('express');
const cors = require('cors');
const feedbackRouter = require('./routes/feedback.routes');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
  });
  
app.use(cors({
    origin: '*'
}));
app.use(express.json())

app.use('/api', feedbackRouter)


app.listen(PORT, () => console.log(`Streaming service is running on http://localhost:${PORT}`))