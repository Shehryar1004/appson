import React from 'react'
import {AiFillWindows, AiFillAndroid, AiFillApple} from 'react-icons/ai'
import './style.css'

const Download = () => {
    return(
        <div className='download_container container' id='download'>
            <div className='download_text-container'>
                <h2>Download Section</h2>
                <p>Lorem epsum Lorem epsum is a great way to put in placeholder fake text</p>
            </div>

            <div className='download_button-container'>
                <div className='download_button'>
                    <AiFillWindows className='download_button-icon'/>
                    <p>Windows Story</p>
                </div>

                <div className='download_button'>
                    <AiFillAndroid className='download_button-icon'/>
                    <p>Android Story</p>
                </div>

                <div className='download_button'>
                    <AiFillApple className='download_button-icon'/>
                    <p>Apple Story</p>
                </div>
            </div>
        </div>
    )
}

export default Download