import React from 'react'
import {BsFillCloudDownloadFill} from 'react-icons/bs'
import {AiFillHeart, AiFillTrophy} from 'react-icons/ai'
import './style.css'

const Rating = () => {
    return(
        <div className='rating_container container' id='review'>
            <div className='rating_box'>
                <BsFillCloudDownloadFill className='rating_icon'/>
                <p className='rating_value'>20K</p>
                <p className='rating_category'>Downloads</p>
            </div>

            <div className='rating_box'>
                <AiFillHeart className='rating_icon'/>
                <p className='rating_value'>5k</p>
                <p className='rating_category'>Happy Clients</p>
            </div>

            <div className='rating_box'>
                <AiFillTrophy className='rating_icon'/>
                <p className='rating_value'>50</p>
                <p className='rating_category'>Award</p>
            </div>
        </div>
    )
}

export default Rating;