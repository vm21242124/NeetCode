import React from 'react'
import './Greeting.css'
import ad1 from '../../Assets/ad1.jpg'
import ad2 from '../../Assets/ad2.png'
import ad3 from '../../Assets/ad3.png'
const Greeting = () => {
  return (
    <div className="greetings">
        <span className='greet'>let's begin your journey with us</span>
        <div className="greetingadds">
            <img className='ad' src={ad1} alt="ad" />
            <img className='ad' src={ad2} alt="ad" />
            <img className='ad' src={ad3} alt="ad" />
            <img className='ad' src={ad1} alt="ad" />
        </div>
    </div>
  )
}

export default Greeting