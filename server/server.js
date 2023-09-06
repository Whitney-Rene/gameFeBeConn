const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); //enable cors

const PORT = process.env.PORT || 1234;

app.get('/myAPI', (req, res) => {
    res.json({ message: "Hello from my ExpressJS"})
});

app.get('/myAPI/myName', (req, res) => {
    const name = {name: "Whitney-Rene"};
    res.json(name);
});

app.get('/test', (req, res) => {
    const test = {test: 'does it work?'};
    res.json(test);
})

app.get('/quizApi', async (req, res) => {
    const response = await fetch ('https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple');
    const data = await response.json();
    console.log(data);
    res.json(data);
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})