import React from 'react';
import {
    BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import UserList from './components/UserList/UserList';
import BraceletList from './components/BraceletList/BraceletList';
import CreateUser from './components/CreateUser/CreateUser';
import LocationMap from './components/LocationMap/LocationMap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="site-container">
                    <div className="site-content">
                        <Switch>
                            <Route path="/register">
                                <CreateUser />
                            </Route>
                            <Route path="/userlist">
                                <UserList />
                            </Route>
                            <Route path="/braceletlist">
                                <BraceletList />
                            </Route>
                            <Route path="/locationmap">
                                <LocationMap />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
