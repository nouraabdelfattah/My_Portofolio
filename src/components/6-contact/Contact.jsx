
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import "./contact.css"
import { useForm, ValidationError } from '@formspree/react';
export default function Contact() {
  const [state, handleSubmit] = useForm("xayrgake")

 
  return (
    <div className="container-fluid" id="#contact">
       <h2 className="main-title">CONTACT</h2>
    <div className="container-fluid contact">
     
<div className="contactMe row">
     <div className="contact-left-section col-md-5 col-sm-12">
      <h3>Drop Me a Message</h3>
      <p>I hope to hear your opinion and I will happy to read your message</p>
     <span className="gmail"><CgMail className="gmail-iqon"/></span><span className="gmail-p">nouraabdelfattah1@gmail.com</span><br/>
     <span className="gmail"><MdLocationOn className="gmail-iqon"/></span><span className="gmail-p">Cairo, Egypt</span>
     </div>
     <form onSubmit={handleSubmit} className="contact-right-section  col-md-5 col-sm-12">


<input type="text" name="email" placeholder="Email"/>
<ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
<textarea name="message" placeholder="Message"></textarea>
<ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
<button  type="submit" disabled={state.submitting}>{state.submitting?"Submitting...":"Submit"}</button>
{state.succeeded&&(
  <p className="greeting-form">Your Message Sent Successfully!</p>
)}
     </form>
     </div>
     <hr className="line"></hr>
     <div className='container-fluid footer'>
     <div className="footer-iqons">
     <span className='footer-iqon' > <a href="https://github.com/nouraabdelfattah"><FaGithub/></a></span>
      <span className='footer-iqon'><a href="https://x.com/noura_Aelfattah?t=8WMwOaFhQMIwNh9rCK2QuQ&s=09"><FaXTwitter/></a></span>
      <span className='footer-iqon'><a href="https://www.instagram.com/nouraabd.elfattah?utm_source=qr&igsh=MXVpOXo4N2JoN2I1cg=="><FaInstagram/></a></span>
      <span className='footer-iqon'><a href="https://www.linkedin.com/in/noura-abd-elfattah-0515b1253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin/></a></span>
      <span className='footer-iqon'><a href="https://www.facebook.com/profile.php?id=100006201288319&sfnsn=scwspwa&mibextid=RUbZ1f"><FaFacebook/></a></span>
     </div>
     <p className="copyright">&copy;2024 Noura Abd Elfattah</p>
    </div>
    </div>
    </div>
   
  )
}
