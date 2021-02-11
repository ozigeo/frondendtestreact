import './list.scss'
import { RegisterBg } from '../../assets'
import { Button } from '../../components'
import {API_URL} from '../../utils/constants'
import axios from 'axios'
import React from 'react'
import {useHistory} from 'react-router-dom'

const List = () => {
    const history = useHistory();
    return (
        <div className="main-page">
                <div className="left">
                    <img src={RegisterBg} className="bg-image" alt="registerBg"/>
                </div>
                <div className="right">
                    <p key="id" className="title">List Contact</p>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">                       
                            <div className="card cursor" onClick={() => history.push('/detail')}>
                                <div className="card-body">
                                <div className="media align-items-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="bg-image avatar avatar-xl mr-3" alt="registerBg"/>
                                    <div className="media-body overflow-hidden">
                                    <h5 className="card-text mb-0">Nielsen Cobb</h5>
                                    <p className="card-text text-uppercase text-muted">Memora</p>
                                    <p className="card-text">
                                        nielsencobb@memora.com<br/><abbr title="Phone">P:  </abbr>+1 (851) 552-2735
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card cursor" onClick={() => history.push('/detail')}>
                                <div className="card-body">
                                <div className="media align-items-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="bg-image avatar avatar-xl mr-3" alt="registerBg"/>
                                    <div className="media-body overflow-hidden">
                                    <h5 className="card-text mb-0">Nielsen Cobb</h5>
                                    <p className="card-text text-uppercase text-muted">Memora</p>
                                    <p className="card-text">
                                        nielsencobb@memora.com<br/><abbr title="Phone">P:  </abbr>+1 (851) 552-2735
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card cursor" onClick={() => history.push('/detail')}>
                                <div className="card-body">
                                <div className="media align-items-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="bg-image avatar avatar-xl mr-3" alt="registerBg"/>
                                    <div className="media-body overflow-hidden">
                                    <h5 className="card-text mb-0">Nielsen Cobb</h5>
                                    <p className="card-text text-uppercase text-muted">Memora</p>
                                    <p className="card-text">
                                        nielsencobb@memora.com<br/><abbr title="Phone">P:  </abbr>+1 (851) 552-2735
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <Button  title="+ Add Contact" onClick={() => history.push('/add-contact')}/>
                    </div>
                </div>
            </div>
    )
}

export default List

