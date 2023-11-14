--PostgreSQL
psql postgres

-- contacts-list

CREATE DATABASE gamefebe;

--
\c gamefebe;

--create players table 

-- player ID 
-- player name
-- player score (int)



CREATE TABLE players (player_id SERIAL PRIMARY KEY, player_name VARCHAR(50) NOT NULL, player_score INTEGER DEFAULT 0);

--INSERT entity in player table
--no double quotes
--NULL means that the data in that column is currently unknown, missing, or undefined

INSERT INTO players (player_name) VALUES ('Whitney-Rene');

INSERT INTO players (player_name) VALUES ('Ahmed');

INSERT INTO players (player_name) VALUES ('Philip');


--UPDATE column values
UPDATE players SET player_score = 100 WHERE player_name = 'Whitney-Rene';

UPDATE players SET player_score = player_score + 10 WHERE player_name = 'Whitney-Rene';

--ORDER BY player_score
SELECT player_name, player_score FROM players ORDER BY player_score DESC;

--DELETE rows/entities
DELETE FROM players WHERE player_id IN (1, 2, 3, 4, 5);