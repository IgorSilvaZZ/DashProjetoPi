import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Especificacoes from './pages/Especificacoes';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/especificacoes" component={Especificacoes} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;