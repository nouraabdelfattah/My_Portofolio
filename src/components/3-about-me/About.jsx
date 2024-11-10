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
    <div className='container  col-md-6 col-sm-12 '>
    <div className="right-section  ">
        <h2 className='about-title'>Noura Abd Elfattah Awd </h2> 
        <p className="span"> </p>
        <p className='about-subtitle'> Hello! I'm  a web developer with a background in engineering and a passion for creating dynamic, user-friendly web applications. My journey in tech began after earning my degree in Telecommunications Engineering from Al-Azhar University, where I discovered my love for web development. Since then, I've honed my skills in JavaScript, React, and Node Js, building diverse projects, including e-commerce platforms and interactive web applications.

 I am always eager to learn, recently diving into tools  and expanding my knowledge in the ever-evolving field of front-end development.

 Please explore my portfolio to see my work and connect with me – I’m excited about new opportunities and collaborations!
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
