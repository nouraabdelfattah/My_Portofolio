import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";

import "./experience.css"
export default function Experience() {
 
  return (
    <div className="container experience">
      <h2 className="main-title">Experience</h2>
      <span className="sub-span"></span>
      <div className="exp-iqons row">
      <div className="html col-md-3 col-4"><FaHtml5/><span className="iqon-span">Html5</span></div>
      <div className=" css col-md-3 col-4"><IoLogoCss3/><span className="iqon-span">Css3</span></div>
      <div className="node col-md-3 col-4"><FaBootstrap/><span className="iqon-span">Bootstrap</span></div>
      <div className="js col-md-3 col-4"><RiJavascriptFill/><span className="iqon-span">JavaScript</span></div>
      <div className=" react col-md-3 col-4"><FaReact/><span className="iqon-span">React JS</span></div>
      <div className="node col-md-3 col-4"><FaNode/><span className="iqon-span">Node JS</span></div>
      <div className="node col-md-3 col-4"><FaGithub/><span className="iqon-span">Github</span></div>
      <div className="node col-md-3 col-4"><IoLogoVercel/><span className="iqon-span">Vercel</span></div>
      
      </div>
    <hr />
    </div>
  )
}
