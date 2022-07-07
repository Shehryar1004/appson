import React from 'react'
import {FiMonitor, FiHeadphones} from 'react-icons/fi'
import {AiFillAndroid} from 'react-icons/ai'
import mockup from '../../assets/mockup_2.webp'
import './style.css'

const Introduction = () => {
    return(
        <div className='intro_container container' id='about'>
            <div className='intro_image'>
                <img src={mockup} alt='mockup for application'/>
            </div>

            <div className='intro_content'>
                <h3 className='intro_h3'>Meet Appson.</h3>
                <h2 className='intro_h2'>Work the way you live</h2>
                <p>Lorem ipsum dolor sit amet, consectetr adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>

                <div className='intro_feature'>
                    <div className='icon_container'>
                        <FiMonitor size={30} color='var(--color-primary )'/>
                    </div>

                    <div>
                        <h2>Fully Responsive Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do enim ad minim veniam,</p>
                    </div>
                </div>

                <div className='intro_feature'>
                    <div className='icon_container'>
                        <FiHeadphones size={30} color='var(--color-primary )'/>
                    </div>

                    <div>
                        <h2>Strategy Solution</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do enim ad minim veniam,</p>
                    </div>
                </div>

                <div className='intro_feature'>
                    <div className='icon_container'>
                        <AiFillAndroid size={30} color='var(--color-primary )'/>
                    </div>

                    <div>
                        <h2>Android Platform</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do enim ad minim veniam,</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction