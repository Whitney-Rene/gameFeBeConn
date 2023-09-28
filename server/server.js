import express from 'express';
import cors from 'cors';
require('dotenv').config(); 
const db = require('./db/db-connection.js');

//??
const app = express();
app.use(cors()); //enables cors, middleware
app.use(express.json());    

const PORT = process.env.PORT || 1234;

//call to api
app.get('/myAPI/quizApi', async (req, res) => {
    const response = await fetch ('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple');
    const data = await response.json();
    console.log(data);
    res.json(data);
})

//??
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})