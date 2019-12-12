import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage, CreatePage, QuestionPage } from './pages';

import UserContext from './context/user';

function App() {
    const [ user, setUser ] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/create" component={CreatePage} />
                    <Route exact path="/question/:questionId" component={QuestionPage} />
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
