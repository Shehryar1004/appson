import React from 'react'

const Screenshots = () => {
    return(
        <div className='screenshots_container container' id='screenshots'>
            <div>
                <center><h2>Screenshots</h2></center>
                <p>Lorem epsum is a great way to put in placeholder fake text</p>
            </div>

            <div className='screenshots_carousel'>
                    <div>
                        <img src='/assets/mockup_1.webp' alt='mockup'/>
                    </div>

                    <div>
                        <img src='/assets/mockup_3.webp' alt='mockup'/>
                    </div>

                    <div>
                        <img src='/assets/mockup_3.webp' alt='mockup'/>
                    </div>
            </div>
        </div>
    )
}

export default Screenshots