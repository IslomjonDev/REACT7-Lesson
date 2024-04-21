import React from 'react'
import Header from '../../components/Header/Header'
import about from'../../components/images/about.png'
import './About.css'
import News from '../../components/News/News'
import Footer from '../../components/Footer/Footer'

const About = () => {
  return (
    <>
      <Header/>
      <div className="about-hero">
        <div className="container">
          <div className="about-content">
            <div className="about-left">
              <h1>We value human, organizational,  and  <br /> operational intelligence, not just artificial</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
              <button>Wark With Us</button>
            </div>
            <div className="about-right">
              <img src={about} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="about-parag">
           <h1>The energy of a start-up combined with 30 years of experience</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
        </div>
        <div className="about-cards">
          <div className="about-card">
            <h1>15+</h1>
            <h2>Awards received</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
          </div>
          <div className="about-card">
            <h1>500+</h1>
            <h2>Clients served</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
          </div>
          <div className="about-card">
            <h1>34</h1>
            <h2></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
          </div>
          <div className="about-card">
            <h1>15+</h1>
            <h2>Awards received</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
          </div>
        </div>
      </div>
      <News/>
      <Footer/>
    </>
  )
}

export default About