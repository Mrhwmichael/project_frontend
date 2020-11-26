import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Introduction from "../introduction/Introduction";
import Diagnosis from "../diagnosis/Diagnosis";
import About from "../about/About";
import Home from "../home/Home";

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/intro" component={Introduction}/>
            <Route exact path="/nav" component={Diagnosis}/>
            <Route exact path="/about" component={About}/>
        </Switch>
    </HashRouter>

);


export default BasicRoute;