import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Header } from '../../components'
import AddContact from '../AddContact'
import CreateBlog from '../CreateBlog'
import Detail from '../Detail'
import DetailBlog from '../DetailBlog'
import Home from '../Home'
import List from '../List'
import './mainapp.scss'

const MainApp = () => {
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

export default MainApp
