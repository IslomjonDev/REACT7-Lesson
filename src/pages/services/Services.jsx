import React from 'react'
import Header from '../../components/Header/Header'
import servic from '../../components/images/services.png'
import './Services.css'
import News from '../../components/News/News'
import Footer from '../../components/Footer/Footer'
const Services = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <div className="services">
          <div className="services-left">
            <h1>We serve clients with ground breaking solutions</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
            <button>Wark With Us</button>
          </div>
          <div className="services-right">
              <img src={servic} alt="" />
          </div>
        </div>
      </div>
      <News/>
      <Footer/>
    </>
  )
}

export default Services