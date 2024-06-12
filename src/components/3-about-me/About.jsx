import React from 'react'
import "./about.css"
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div className='container about'>
        
        <div className=" row ">
      <div className="left-section col-md-3 col-sm-12 ">
         <img className='about-img' src='/0cd5919e4c6b92f040a4fa3829a0e864.jpg'/>
      </div>
      <div className="right-section col-md-8 col-sm-12  ">
        <h2 className='about-title'>ABOUT ME</h2>
        <p className="span"> </p>
        <p className='about-subtitle'>I'm a Freelance Full Stack web developer based in Cairo Egypt,I'm very passionate and dedicated to my work. <br/>
            <p className='about-table'>Name : Noura Abd Elfattah<br/>
            Phone : 01065523873<br/>
            Age : 24<br/>
            Graduation : graduated from fucaulty of engineering communication and electronics department<br/>
            year of graduation : 2022<br/>
            Experience : junior
            <div className="hero-button">
<Link to="/contact"><button className="hire1-button">Hire Me</button></Link>
<a href="/Noura_Abd Elfattah_CV.pdf"><button className="hire2-button">Download CV</button></a>
</div>
            </p>
        </p>
      </div>
      </div>
    </div>
  )
}
