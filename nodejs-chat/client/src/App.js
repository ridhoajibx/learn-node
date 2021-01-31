import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from './UserContext'

import Chat from './components/chat/Chat';
import Home from './components/home/Home';
import Navbar from './components/layout/Navbar';

function App() {
    const [user, setUser] = useState(null);
    // console.log(user);
    return (
        <div className="App">
            <UserContext.Provider value= {{ user, setUser }}>
                <Navbar />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/chat" component={Chat} />
                    </Switch>
                </Router>
            </UserContext.Provider>
        </div>
    );
}

export default App;
