import { Navbar } from "../../components";
import mockup from '../../assets/mockup_1.webp'
import './style.css'

const Hero = () => {
    return(
        <div className="hero_container" id='home'>
            <Navbar />
            <div className="hero container">

                <div className="hero_content">
                    <h2>Perfect Landing Page Best For Your App</h2>
                    <p>The Best Template For Your Mobile App To Showcase And Acquire New Customers All Around The World.The Best Template That You Can Find Anywhere!</p>
                    <div className="hero_button">
                        <p>Download Now</p>
                    </div>
                </div>

                <div className="hero_image">
                    <img src={mockup} alt='mockup of application'/>
                </div>

                
            </div>
        </div>
    )
}

export default Hero;