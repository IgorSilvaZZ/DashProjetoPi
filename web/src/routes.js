import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Specification from './pages/Specification';
import Historic from './pages/Historic';
import Setting from './pages/Setting';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/specification" component={Specification} />
                <Route path="/historic" component={Historic} />
                <Route path="/setting" component={Setting} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;