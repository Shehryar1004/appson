import React from 'react'
import mockup1 from '../../assets/mockup_1.webp'
import mockup3 from '../../assets/mockup_3.webp'
import './style.css'

const Screenshots = () => {
    return(
        <div className='screenshots_container container' id='screenshots'>
            <div>
                <center><h2>Screenshots</h2></center>
                <p>Lorem epsum is a great way to put in placeholder fake text</p>
            </div>

            <div className='screenshots_carousel'>
                    <div>
                        <img src={mockup1} alt='mockup'/>
                    </div>

                    <div>
                        <img src={mockup3} alt='mockup'/>
                    </div>

                    <div>
                        <img src={mockup3} alt='mockup'/>
                    </div>           
            </div>
        </div>
    )
}

export default Screenshots