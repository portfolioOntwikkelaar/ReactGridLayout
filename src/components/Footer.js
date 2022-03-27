import React from 'react'
import bag4 from '../components/assets/bag4.jpeg'
import bag5 from '../components/assets/bag5.jpeg'
import bag6 from '../components/assets/bag6.jpeg'
import bag7 from '../components/assets/bag7.jpeg'
import '../components/styles/Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="f__header">
        <h1>Bijdragen</h1>
      </div>
      <div className="footer__container">

        <div className="f__card">
          <img src={bag4} alt="" />
          <p className='pip'>Lorem, ipsum dolor.</p>
        </div>
        <div className="f__card">
          <img src={bag5} alt="" />
          <p className='pip'>Lorem, ipsum dolor.</p>
        </div>
        <div className="f__card">
          <img src={bag6} alt="" />
          <p className='pip'>Lorem, ipsum dolor.</p>
        </div>
        <div className="f__card">
          <img src={bag7} alt="" />
          <p className='pip'>Lorem, ipsum dolor.</p>
        </div>
        
      </div>
      
    </div>
  )
}

export default Footer
