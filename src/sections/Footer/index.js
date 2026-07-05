import React from 'react'
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

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

            <div className='footer_credit-container'>
                <p>
                    Design based on the Appson template by{' '}
                    <a href='https://colorlib.com' target='_blank' rel='noopener noreferrer'>Colorlib</a>,{' '}
                    licensed under{' '}
                    <a href='https://creativecommons.org/licenses/by/3.0/' target='_blank' rel='noopener noreferrer'>CC BY 3.0</a>.
                </p>
            </div>
        </div>
    )
}

export default Footer