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

app.get('/quiz', (req, res) => {
    const test = {test: 'does it work?'};
    res.json(test);
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})