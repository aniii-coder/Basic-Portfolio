import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
    <>
      <div className='bodi-1'>
        <div className='bodi-2'>
          <div className="lt">
            
            <div className="lt-up" style={{ marginLeft: '5px' }}>Aniket V. Singh</div>
            <div className="lt-mid"><p >Greetings! I am <b>Aniket V. Singh</b>, a recent Computer Science graduate from Mumbai University. My passion lies in web development, and I’ve gained proficiency in HTML, CSS, JavaScript, and various web frameworks through my coursework and personal projects. I’m excited to contribute my skills and creativity to building beautiful and functional websites</p></div>
            <div className="lt-down"><button >Let's get started ></button></div>
            
          </div>
        </div>
            <div className="rt">
              {/* <img src="./Assests/wp2.jpg" alt="" id='new'/> */}
            </div>
          
        
          <div className="ft">
            <div className="ft-up">Worked with</div>
            <div className="ft-down">
              <nav>
                <li>Facebook</li>
                <li>Apple</li>
                <li>Amazon</li>
                <li>Netflix</li>
                <li>Google</li>
              </nav>
            </div>
          </div>
          </div>
          </>
  )
}