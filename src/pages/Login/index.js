import React from 'react'
import { LoginBg } from '../../assets'
import { Button, Input, Gap, Link } from '../../components'

const Login = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="bg-image" alt="loginBg"/>
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Input label="Email" placeholder="Email"/>
                <Gap height={15}/>
                <Input label="Password" placeholder="Password"/>
                <Gap height={30}/>
                <Button title="Login"/>
                <Gap height={20}/>
                <Link title="Daftar Akun"/>
            </div>
        </div>
    )
}

export default Login
