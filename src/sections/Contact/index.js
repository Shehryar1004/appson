import React, {useState} from 'react'
import './style.css'
import {AiFillHome, AiFillPhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'


const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(`${name}, ${email}, ${subject}, '${message}' have been sent`)
        setStatus("Message Has Been Submitted Successfully!")
    }

    return (
        <form className='contact_form' onSubmit={onSubmit}>
            <input 
                type='text' 
                className='contact_input'
                placeholder='Your Name*'
                onChange={(event) => setName(event.target.value)}
                required
            />

            <input 
                type='text' 
                className='contact_input'
                placeholder='Your Email Address*'
                onChange={(event) => setEmail(event.target.value)}
                required
            />


            <input 
                type='text' 
                className='contact_input'
                placeholder='Your Subject*'
                onChange={(event) => setSubject(event.target.value)}
                required
            />

            <input 
                type='textbox' 
                className='contact_input'
                placeholder='Your Message*'
                onChange={(event) => setMessage(event.target.value)}
                required
            />

            <button 
                type='submit' 
                className='contact_submitButton'
            >
                Submit
            </button>

            <p>{status}</p>
        </form>
    )
}

const Contact = () => {
    return(
        <div className='contact_container container' id='contact'>
            <div className='contact_heading'>
                <h2>Contact Us</h2>
            </div>

            <div className='contact_content-container'>
                <div className='contact_address-container contact_shadow_box'>
                    <h3>Address</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore e</p>

                    <div className='contact_address contact_item'>
                        <div>
                            <AiFillHome size={25}/>
                        </div>

                        <p>300 Kutubkhailpoint <br /> New York, United States</p>
                    </div>

                    <div className='contact_phone contact_item'>
                        <div>
                            <AiFillPhone size={25}/>
                        </div>

                        <p>+0044 545 989 625</p>
                    </div>

                    <div className='contact_email contact_item'>
                        <div>
                            <MdEmail size={25}/>
                        </div>

                        <p>example@gamil.com</p>
                    </div>
                </div>

                <div className='contact_form-container contact_shadow_box'>
                    <h3>Get In Touch</h3>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Contact