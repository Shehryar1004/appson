import React from 'react'
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import './style.css'

const Footer = () => {
    return(
        <div className='footer_container'>
            <div className='footer_socialMedia-container'>
                <a href='https://www.facebook.com'>
                    <div className='footer_socialMedia-icon_container'> 
                        <FaFacebookF /> 
                    </div>
                </a>

                <a href='https://www.twitter.com'>
                    <div className='footer_socialMedia-icon_container'> 
                        <FaTwitter /> 
                    </div>
                </a>

                <a href='https://www.instagram.com'>
                    <div className='footer_socialMedia-icon_container'> 
                        <FaInstagram /> 
                    </div>
                </a>

                <a href='https://linkedin.com'>
                    <div className='footer_socialMedia-icon_container'> 
                        <FaLinkedinIn /> 
                    </div>
                </a>
            </div>

            <div className='footer_copyright-container'>
                <p>Copyright ©2022 All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer