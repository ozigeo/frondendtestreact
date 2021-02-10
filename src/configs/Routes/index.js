import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login, Register, MainApp, List, Detail, AddContact } from '../../pages'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <MainApp/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
