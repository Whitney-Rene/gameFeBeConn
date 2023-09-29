import { useState } from 'react';

function UserName ({submitScore}) {

    //state
    const [userName, setUserName] = useState("");
    const [submitted, setSubmitted] = useState(false);

    //
    const handleSubmit = (event) => {

        event.preventDefault();
        //grab userName state and pass it as parameter to prop/function
        submitScore(userName);
        //set this state to true, so that text on button changes to let user know name was grabbed
        setSubmitted(true);
        //reset input box to blank, ui=user knows something happened
        setUserName('');

    };

    return (

        <>
            {/* form */}
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your name & SUBMIT to save your score:
                    <br />
                    <input 
                        type='text'
                        // can this be any name or should mimic database column?
                        name='player_name'
                        required
                        placeholder='tu nombre'
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </label>

                <br />
                {/* disabled prop is unclear to me, internet suggested it */}
                <button type='submit'disabled={submitted}>
                    {submitted ? "Name Submitted" : "Submit"}
                </button>

            </form>
        </>

    )
}

export default UserName