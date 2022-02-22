import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import {Home} from '../../pages/home';
import {Devs} from '../../pages/devs';

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/devs' component={Devs} />

                <Route path='*' component={() => <Redirect to="/home"/>}/>
            </Switch>
        </BrowserRouter>
    );
}