import React from 'react'
import { Logo, Jempol } from '../../../assets'
import './footer.scss'

const IconClass = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon"/>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="copyright">
                <p>FrontEnd Test</p>
            </div>
        </div>
    )
}

export default Footer
