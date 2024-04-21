import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import hero1 from '../../components/images/hero1.svg'
import hero2 from '../../components/images/hero2.svg'
import hero3 from '../../components/images/hero3.svg'
import hero4 from '../../components/images/Image.png'
import News from '../../components/News/News'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <>
    <Header/>
      <div className="hero">
         <div className="container">
            <div className="hero-content">
                <div className="hero-left">
                    <h1>Prosper with our bespoke solutions</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
                    <span>
                        <button className='hero-btn1'>See Our Services</button>
                        <button className='hero-btn2'>See All Services </button>
                    </span>
                    <h5>Worked with 100+ Companies</h5>
                    <div className="hero-logos">
                      <img src={hero1} alt="" />
                      <img src={hero2} alt="" />
                      <img src={hero3} alt="" />
                    </div>
                </div>
                <div className="hero-right">
                  <img src={hero4} alt="" />
                </div>
            </div>
            <News/>
         </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home