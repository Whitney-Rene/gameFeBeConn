import {useState, useEffect} from 'react';

function ScoreBoard () {

    //state
    const [topFivePlayers, setTopFivePlayers] = useState([]);
    const [buttonClicked, setButtonClicked] = useState(false);
    console.log(buttonClicked);

    //req to api in backend
    const reqTopFive = async () => {
        try {
        const response = await fetch('/myAPI/highScorePlayers');
        const data = await response.json();
        setTopFivePlayers(data);
        } catch(error) {
            console.log('Error fetch top 5:', error)
        }
        //set this to true, so scoreboard appears
        setButtonClicked(true);
      };

    //when/where to use useEffect???
    // useEffect(() => {
    //     reqTopFive();
    //   }, []);

    return (
        <>

        <button onClick={() => {reqTopFive()}}>ScoreBoard: Top Five!</button>
        
        {buttonClicked && ( 
            <> 
                <h2>Top 5 Players</h2>
                <ul>
                    {topFivePlayers.map((player, index) => (
                        <li key={index}>
                            {player.player_name}: {player.player_score} points
                        </li>
                    ))}
                </ul> 
            </>
            )}

        </>
    );
};

export default ScoreBoard