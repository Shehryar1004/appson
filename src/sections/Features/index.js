import React from 'react'
import {AiFillCloud, AiFillFileImage, AiFillAndroid} from 'react-icons/ai'
import {BsBox, BsHeadphones} from 'react-icons/bs'
import {MdOutlineMonitor} from 'react-icons/md'
import mockup from '../../assets/mockup_3.webp'
import './style.css'

const Features = () => {
    return(
        <div className='features_container container' id='features'>
            <div>
                <center><h2>Best Features</h2></center>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
            </div>

            <div className='features_features'>

                <div className='features_column right'>
                    <div className='features_feature'>
                        <div className='feature_icon-container'>
                            <AiFillFileImage size={30} fill='#fff'/>
                        </div>

                        <p className='feature_title'>Unlimited Features</p>
                        <p className='right_align'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
                    </div>

                    <div className='features_feature'>
                        <div className='feature_icon-container'>
                            <AiFillCloud size={30} fill='#fff'/>
                        </div>

                        <p className='feature_title'>Cloud Storage</p>
                        <p className='right_align'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
                    </div>

                    <div className='features_feature'>
                        <div className='feature_icon-container'>
                            <BsBox size={30} fill='#fff'/>
                        </div>

                        <p className='feature_title'>Modern Design</p>
                        <p className='right_align'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
                    </div>
                </div>

                <div className='features_image-container'>
                    <img src={mockup} alt='mockup of application'/>
                </div>

                <div className='features_column left'>
                    <div className='features_feature'>
                        <div className='feature_icon-container'>
                            <AiFillAndroid size={30} fill='#fff'/>
                        </div>

                        <p className='feature_title'>Android Platform</p>
                        <p className='left_align'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
                    </div>
                
                    <div className='features_feature'>
                        <div className='feature_icon-container'>
                            <BsHeadphones size={30} fill='#fff'/>
                        </div>

                        <p className='feature_title'>Strategy Solutions</p>
                        <p className='left_align'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
                    </div>

                    <div className='features_feature'>
                        <div className='feature_icon-container'>
                            <MdOutlineMonitor size={30} fill='#fff'/>
                        </div>

                        <p className='feature_title'>Fully Responsive Design</p>
                        <p className='left_align'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;