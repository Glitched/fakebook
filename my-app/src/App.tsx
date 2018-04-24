import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Posts from './Posts';
import Profile from './Profile';
import Titlebar from './Titlebar';

class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Titlebar />
                    <Switch>
                        <Route exact={true} path="/" component={Posts} />
                        <Route exact={true} path="/index.html" component={Posts} />
                        <Route exact={true} path="/profile/:profileId" component={Profile} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
