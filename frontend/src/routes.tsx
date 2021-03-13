import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Admin from './pages/Admin';
import Atendimento from './pages/Atendimento';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/atendimento" exact component={Atendimento} />
        </Switch>
    );
}

export default Routes;