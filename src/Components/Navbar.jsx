import React from 'react'
import './Navbar.css'
import Testimonials from './Testimonials'

export const Navbar = () => {
  
  return (
    <>
    <div className='container'>
        <div className="heading">
            <div className="lt-part">
                
                    <p style={{paddingLeft:'5px'}} id='home'>Home</p>
                    <p id='Testimonials' >Testimonials</p>
                    <p id='About'>About</p>
                    <p id='Contact'>Contact</p>
                
            </div>
            <div className="rt-part">
                <p id='ldin' style={{marginRight:'5px'}}><img src="./Assests/Linkedin.png" alt="" /></p>
                <p id='twt'><img src="./Assests/Twitter.png" alt="" /></p>
                <p id='bnc'style={{marginRight:'5px'}}><img src="./Assests/Behance.png" alt="" /></p>
            </div>
        </div>
    </div>
    
    </>
  )
}
