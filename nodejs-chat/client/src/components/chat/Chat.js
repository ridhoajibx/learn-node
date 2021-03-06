import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
function Chat() {
    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h1>Chat {JSON.stringify(user)}</h1>
            <Link to='/'>
                <button>go to home</button>
            </Link>
        </div>
    )
}

export default Chat
