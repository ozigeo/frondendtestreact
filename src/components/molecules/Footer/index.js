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
            <div className="footer">
                <div>
                    <img className="logo" src={Logo} alt="logo"/>
                </div>
                <div className="social-wrapper">
                    <IconClass img={Jempol} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
