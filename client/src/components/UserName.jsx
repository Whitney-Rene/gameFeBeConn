import { useState } from 'react';

function UserName ({submitScore}) {

    const [userName, setUserName] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();
        submitScore(userName);

        setUserName("Thank you!");

    };

    return (

        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
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
                <button type='submit'>Submit</button>

            </form>
        </>

    )
}

export default UserName