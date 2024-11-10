import React from 'react'
import "./about.css"
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div className='container-fluid about '>
        
        <div className=" row about-parent ">
          
      <div className="left-section col-md-3 col-sm-12 ">
      <div className='about-circle'></div>
         
      </div>
    <div className='container  col-md-7 col-sm-12 '>
    <div className="right-section  ">
        <h2 className='about-title'>Noura Abd Elfattah Awd </h2> 
        <p className="span"> </p>
        <p className='about-subtitle'>    Hello ! I'm a Front End web developer based in Cairo Egypt,I'm very passionate and dedicated to my work. <br/>
            <p className='about-table'>
            Phone :+201065523873<br/>
            Age : 24<br/>
            Graduation : graduated from fucaulty of engineering communication and electronics department<br/>
            year of graduation : 2022<br/>
            Experience : junior
            <div className="hero-button">
<a href="#contact"><button className="hire1-button">Hire Me</button></a>
<a href="/MyCV.pdf"><button className="hire2-button">Download CV</button></a>
</div>
            </p>
        </p>
      </div>
    </div>
      <div className='circle2 col-md-2'></div>
      <div className='circle3 col-md-2'></div>
      <div className='circle4 col-md-2'></div>
      </div>
      
    </div>
  )
}
