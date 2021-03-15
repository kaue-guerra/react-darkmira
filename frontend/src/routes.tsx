import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Admin from './pages/Admin';
import Atendimento from './pages/Atendimento';
import FormAtendimento from './pages/Atendimento/FormAtendimento'
import FormServico from './pages/Admin/FormServico'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/atendimento" exact component={Atendimento} />
            <Route path="/atendimento/novo" exact component={FormAtendimento} />
            <Route path="/servico/novo" exact component={FormServico} />

        </Switch>
    );
}

export default Routes;