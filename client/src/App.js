import React from 'react';
import {
    BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import UserList from './components/UserList/UserList';
import CreateUser from './components/CreateUser/CreateUser';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="site-container">
                    <div className="site-content">
                        <Switch>
                            <Route path="/otherpath">
                                <UserList />
                            </Route>
                            <Route path="/register">
                                <CreateUser />
                            </Route>
                            <Route path="/userlist">
                                <UserList />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
