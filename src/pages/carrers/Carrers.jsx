import React from 'react'
import Header from '../../components/Header/Header'
import News from '../../components/News/News'
import carrers from '../../components/images/carrers.png'
import Footer from '../../components/Footer/Footer'

import './Carrers.css'
const Carrers = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <div className="carrers">
          <div className="carresr-left">
            <h1>We hired people who are very passionate about what they do</h1>
            <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw.</p>
            <button>View Positions</button>
          </div>
          <div className="carrers-right">
            <img src={carrers} alt="" />
          </div>
        </div>
      </div>
      <News/>
      <Footer/>
    </>
  )
}

export default Carrers