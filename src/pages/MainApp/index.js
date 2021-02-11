import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Header } from '../../components'
import AddContact from '../AddContact'
import Detail from '../Detail'
import List from '../List'
import './mainapp.scss'

export default class index extends Component {
    render() {
        return (
            <div className="main-app-wrapper">
            <div className="header-wrapper">
                <Header/>
            </div>
            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route path="/detail">
                            <Detail/>
                        </Route>
                        <Route path="/add-contact">
                            <AddContact/>
                        </Route>
                        <Route path="/">
                            <List/>
                        </Route>
                    </Switch>
                </Router>
            </div>
            <div className="footer-wrapper">
                <Footer/>
            </div>
        </div>
        )
    }
}