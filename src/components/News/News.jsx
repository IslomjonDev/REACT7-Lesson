import React from 'react'
import './News.css'
import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'
import { BsArrowRight } from "react-icons/bs";

const News = () => {
  return (
    <>
       <div className="news-cards">
            <div className="container">
                <h1 className='newws'>Latest Blog & News</h1>
                <div className="news-card">
                    <div className="news-card1">
                        <img src={card1} alt="" />
                        <div className="card-parag">

                        <h1>Why you have to digitalize in 2021</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                         <span>
                        <h5>Learn More</h5>
                        <BsArrowRight  className='arrow'/>
                         </span>
                        </div>
                    </div>
                    <div className="news-card1">
                        <img src={card2} alt="" />
                        <div className="card-parag">

                        <h1>Our internal process and longerm vision</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                         <span>
                        <h5>Learn More</h5>
                        <BsArrowRight  className='arrow'/>
                         </span>
                        </div>
                    </div>
                    <div className="news-card1">
                        <img src={card3} alt="" />
                        <div className="card-parag">

                        <h1>Helping the next generation of leaders</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                         <span>
                        <h5>Learn More</h5>
                        <BsArrowRight  className='arrow'/>
                         </span>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default News