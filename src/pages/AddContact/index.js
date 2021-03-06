import React from 'react'
import { RegisterBg } from '../../assets'
import { Button, Input, Gap, Link, BtnBack } from '../../components'
import {useHistory} from 'react-router-dom'

const AddContact = () => {
    const history = useHistory();
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image" alt="registerBg"/>
            </div>
            <div className="right">
                <BtnBack title="<" onClick={() => history.push('/')}/>
                <Gap height={30}/>
                <p className="title">Input Contact</p>
                <Input label="First Name" placeholder="First Name"/>
                <Gap height={15}/>
                <Input label="Last Name" placeholder="Last Name"/>
                <Gap height={15}/>
                <Input label="Phone Number" placeholder="Phone Number"/>
                <Gap height={15}/>
                <Input label="Email" placeholder="Email"/>
                <Gap height={15}/>
                <Button title="Save"/>
            </div>
        </div>
    )
}

export default AddContact
