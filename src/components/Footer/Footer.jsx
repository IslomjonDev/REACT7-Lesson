import React from 'react'
import { FaFacebookF , FaYoutube , FaInstagram , FaTwitter  } from "react-icons/fa";
import  './Footer.css'
const Footer = () => {
  return (
    <>
       <footer>
        <div className="container">
            <div className="footer-content">
                <div>
                    <h2>Finsweet</h2>
                    <h1>Bespoke software solutions</h1>
                    <span>
                    <FaFacebookF />
                    <FaYoutube />
                    <FaInstagram />
                    <FaTwitter />
                    </span>
                </div>
                <div>
                    <h4>Company</h4>
                    <p>About Us</p>
                    <p>Carrers</p>
                    <p>Services</p>
                    <p>Blog</p>
                </div>
                <div>
                    <h4>Connect</h4>
                    <p>mamadyevislomjon2@gmail.com</p>
                    <p>+(998)-91-194-47-84</p>
                </div>
                <div>
                    <h4>Join Newsletter</h4>
                    <span className='foter-btn'>
                    <input type="text" placeholder='Type email here' /> 
                    <button>Subscribe</button>         
                   </span>    
        </div>
            </div>
        </div>  
      </footer> 
    </>
  )
}

export default Footer