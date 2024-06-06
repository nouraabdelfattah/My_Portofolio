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
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/main">Projects</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/main">Projects</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
       </ul>
     
           </div>
           
   )}
    </header>
  );
}
