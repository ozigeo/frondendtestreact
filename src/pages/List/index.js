import React from 'react'
import './list.scss'
import { RegisterBg } from '../../assets'
import { Button, Input, Gap, Link } from '../../components'

const List = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image" alt="registerBg"/>
            </div>
            <div className="right">
                <p className="title">List Contact</p>

                <div class="grey-bg container-fluid">
                <section id="minimal-statistics">
                <div class="row">
                    <div class="col-12">
                        <div class="card cursor">
                            <div class="card-content">
                                <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                    <h3 class="success">1</h3>
                                    <span>Agus Herlambang</span>
                                    </div>
                                    <div class="align-self-center">
                                    <i class="icon-user success font-large-2 float-right"></i>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card cursor">
                            <div class="card-content">
                                <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                    <h3 class="success">1</h3>
                                    <span>Maman Racing</span>
                                    </div>
                                    <div class="align-self-center">
                                    <i class="icon-user success font-large-2 float-right"></i>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card cursor">
                            <div class="card-content">
                                <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                    <h3 class="success">1</h3>
                                    <span>Susilo Bambang</span>
                                    </div>
                                    <div class="align-self-center">
                                    <i class="icon-user success font-large-2 float-right"></i>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                </div>
                <button type="button" class="btn btn-secondary"><a href="/add-contact">+ Add Contact</a></button>
            </div>
        </div>
    )
}

export default List
