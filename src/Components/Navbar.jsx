import React from 'react'
import './Navbar.css'


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
            
        </div>
    </div>
    
    </>
  )
}

export default Navbar;