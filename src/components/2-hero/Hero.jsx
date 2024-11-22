
import "./hero.css"
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion"
import Header from "../1-header/Header";
export default function Hero() {
  return (
    <section className="hero" id="#home">
      <Header/>
      <div className="hero-content">
      <div className="left-section">
      <div className="circle"></div>
<h1 className="title">  Noura</h1>
<h1 className="title">Abd EL-Fattah</h1>
<p className="sub-title">
  <span></span>
  <TypeAnimation
  sequence={[
    "Full Stack web developer ",
    1000,
    "Front End web developer",
    1000,
    "Back End web developer",
    1000
  ]}
  wrapper="span"
  speed={40}
  repeat={Infinity}
  />


</p>
<div className="iqons flex">
  <div className="iqon"><a href="https://x.com/noura_Aelfattah?t=8WMwOaFhQMIwNh9rCK2QuQ&s=09"><FaXTwitter/></a></div>
  <div className="iqon"><a href="https://www.instagram.com/nouraabd.elfattah?utm_source=qr&igsh=MXVpOXo4N2JoN2I1cg=="><FaInstagram/></a></div>
  <div className="iqon"><a href="https://github.com/nouraabdelfattah"><FaGithub/></a></div>
  <div className="iqon"><a href="https://www.linkedin.com/in/noura-abd-elfattah-0515b1253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin/></a></div>
</div>


      </div>
      <div className="right-section-hero">
     
      <motion.img
      initial={{scale:0, opacity:0}}
        animate={{scale:1, opacity:1}}
        duration={2}
        className="hero-img  border" src="/download (11).jpeg"/>
      </div>
      </div>
    </section>
  )
}
