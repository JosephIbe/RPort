import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing/Landing';
import About from './About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/projects' component={Projects} />
        <Route path='/resume' component={Resume} />
    </Switch>
)

export default Routes;