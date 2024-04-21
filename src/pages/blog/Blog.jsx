import React from 'react'
import Header from '../../components/Header/Header'
import person from '../../components/images/person.png'
import blog from '../../components/images/blog.png'
import './Blog.css'
import Footer from '../../components/Footer/Footer'
const Blog = () => {
  return (
    <>
      <Header/>
      <div className="blog-content">
        
      <div className="container">
        <div className="blog">
          <div className="blog-left">
            <span>
              <img src={person} alt="" />
              <h4>Andrew Jonson</h4>
              <h4>posted on 27th January 2021</h4>
            </span>
            <h1>Our internal process and longerm vision</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the</p>
          </div>
          <div className="blog-right">
            <img src={blog} alt="" />
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default Blog