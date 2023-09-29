const express = require('express'); // imports expresss framework
const cors = require('cors');
require('dotenv').config(); 
const db = require('./db/db-connection.js');

const app = express();
app.use(cors()); //enables cors, middleware
app.use(express.json());    

const PORT = process.env.PORT || 1234;

//call to api, returns a json with an array of questionss
app.get('/myAPI/quizApi', async (req, res) => {
    const response = await fetch ('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple');
    const data = await response.json();
    console.log(data);
    res.json(data);
});

//endpoint that returns a json with player info in each obj, select * from players
app.get('/myAPI/players', async (req, res) => {
    try {
        const {rows: players} = await db.query ('SELECT * FROM players');
        res.send(players)
    } catch (error) {
        return res.status(400).json({error});
    }
});

//endpoint to organize players in desc order by player_score, 
app.get('/myAPI/highScorePlayers', async (req, res) => {
    try {
        const {rows: players} = await db.query ('SELECT player_name, player_score FROM players ORDER BY player_score DESC');
        res.send(players)
    } catch (error) {
        return res.status(400).json({error});
    }
});

//endpoint to add new players to the db
app.post('/myAPI/addplayer', async (req, res) => {
    try {
        const { player_name } = req.body;
        const result = await db.query (

            //INSERT INTO players (player_name, player_score) VALUES ('Whitney-Rene');
            'INSERT INTO players (player_name) VALUES ($1) RETURNING *',
            [player_name]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        return res.status(400).json({error});
    }
});

//endpoint to update player_score
app.put('/myAPI/editplayer_score', async (req, res) => {

    const updatedScore = {
        player_name : req.body.player_name,
        currentscore: req.body.currentscore
    }
    //UPDATE players SET player_score = player_score + 10 WHERE player_name = 'Whitney-Rene';
    //initial value of score column should be zero and not null
    const query = `UPDATE players SET player_score = player_score + $1 WHERE player_name = $2 RETURNING *`;
    const values = [
        updatedScore.currentscore,
        updatedScore.player_name
    ];

    try {
        const updated = await db.query(query, values);
        console.log(updated.rows[0]);
        res.send(updated.rows[0]);
   } catch (error) {
       console.log(error);
       return res.status(400).json({error})
   }

})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})
