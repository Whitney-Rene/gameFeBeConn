import { useState } from 'react';

function UserName ({submitScore}) {

    const [userName, setUserName] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {

        event.preventDefault();
        submitScore(userName);
        setSubmitted(true);
        setUserName('');

    };

    return (

        <>
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
                {/* this code is a little unclear to me, but fixed an issue in my code/ux */}
                <br />
                <button type='submit'disabled={submitted}>
                    {submitted ? "Name Submitted" : "Submit"}
                </button>

            </form>
        </>

    )
}

export default UserName