import Dashboard from './component/Dashboard/Dashboard'
import Wizard from './component/Wizard/Wizard'
import { Route, Switch } from 'react-router-dom'
import React from 'react'
export default (<Switch>

    <Route exact path='/' component={Dashboard}/>
    <Route path='/wizard/' component={Wizard}/>

</Switch>
)