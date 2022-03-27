import React from 'react'
import '../components/styles/Section.scss'
import bag1 from '../components/assets/bag1.jpeg'
import bag2 from '../components/assets/bag2.jpeg'
import bag3 from '../components/assets/bag3.jpeg'
import bag4 from '../components/assets/bag4.jpeg'
import bag5 from '../components/assets/bag5.jpeg'
import bag6 from '../components/assets/bag6.jpeg'
import bag7 from '../components/assets/bag7.jpeg'
import bag8 from '../components/assets/bag8.jpeg'
import bag9 from '../components/assets/bag9.jpeg'
import bag10 from '../components/assets/bag10.jpeg'

const Section = () => {
  return (
    <div className='section'>
      <div className="grid__container">
        <div className="cards">
          <img src={bag1} alt="" />

          <div className="text">
            <p>Nieuwe tass</p>
          </div>
        </div>
        <div className="cards long">
          <img src={bag2} alt="" />

          <div className="text">
            <p>Nieuwe tass</p>
          </div>
        </div>
        <div className="cards">
          <img src={bag3} alt="" />

          <div className="text">
            <p>Nieuwe tass</p>
          </div>
        </div>
        <div className="cards">
          <img src={bag4} alt="" />

          <div className="text">
            <p>Nieuwe tass</p>
          </div>
        </div>
        <div className="cards">
          <img src={bag5} alt="" />

          <div className="text">
            <p>Nieuwe tass</p>
          </div>
        </div>
        <div className="cards">
          <img src={bag6} alt="" />

          <div className="text">
            <p>Nieuwe tass</p>
          </div>
        </div>
        <div className="cards">
          <img src={bag7} alt="" />

          <div className="text">
            <p>Nieuwe tass</p>
          </div>
        </div>
        <div className="cards long2">
          <img src={bag8} alt="" />

          <div className="text">
            <p>Nieuwe tass</p>
          </div>
        </div>
        <div className="cards">
          <img src={bag9} alt="" />

          <div className="text">
            <p>Nieuwe tass</p>
          </div>
        </div>
        <div className="cards">
          <img src={bag10} alt="" />

          <div className="text">
            <p>Nieuwe tass</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
