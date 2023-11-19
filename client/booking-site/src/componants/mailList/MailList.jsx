import React from 'react'
import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className="mailTitle">Save Time, Save Money !</h1>
        <span className="mailDesc">sign up and we'll send the best deals for you </span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Enter your email address"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList