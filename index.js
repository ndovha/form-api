require('dotenv').config();
const express = require('express');
const cors = require('cors');
const feedbackRouter = require('./routes/feedback.routes');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.use('/api', feedbackRouter)


app.listen(PORT, () => console.log(`Streaming service is running on http://localhost:${PORT}`))