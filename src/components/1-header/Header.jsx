import  { useState } from "react";
import { IoIosClose } from "react-icons/io"
import { IoMenu } from "react-icons/io5";
import "./header.css";
import { Link, Outlet } from "react-router-dom";
export default function Header() {
  const [showModel,setShowModel]=useState(false)
  return (
    <header className="flex">
      
    <button className="menu flex" onClick={() => {
      setShowModel(true)
    }
    }><IoMenu/></button>
    <nav>
      <ul className="flex">
      
        <li>
          <Link to={'/'}><a href="#home">Home</a></Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
 {showModel&&(
     <div className="fixed">
     <ul className="model">
     <li><button onClick={() => {
       setShowModel(false)
     }
     }><IoIosClose className="close"/></button></li>
       <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
       
        <li>
          <a href="#contact">Contact</a>
        </li>
     </ul>
         </div>
         
 )}
  </header>
  );
}
