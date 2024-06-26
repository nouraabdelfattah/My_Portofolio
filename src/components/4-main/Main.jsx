import "./main.css";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const projects= [
  {
      "id":1,
  projectName:"Gemini-Clone AI",
  imgUrl:"/gemini clone.PNG",
  Description:" React JS and API ",
  githubLink:"https://github.com/nouraabdelfattah/gemini-clone-Reactjs-API",
  deployLink:"https://gemini-clone-topaz.vercel.app/",
  responsive:"Responsive"
  },
  {
    id:2,
projectName:"saba-shopping-cart",
imgUrl:"/saba-shopping-cart.PNG",
Description:"JavaScript ",
githubLink:"https://github.com/nouraabdelfattah/saba-shopping-cart-JavaScript",
deployLink:"https://nouraabdelfattah.github.io/saba-shopping-cart-JavaScript/",
responsive:"  Responsive"

} ,
  {
      id:3,
      imgUrl:"/cloths-shop.PNG",
  projectName:"Cloths shop website",
  Description:" bootstrap ",
  githubLink:"https://github.com/nouraabdelfattah/cloths-shop-bootstrap",
  deployLink:"https://nouraabdelfattah.github.io/cloths-shop-bootstrap/",
  responsive:"Responsive"
  },
  {
      id:4,
  projectName:"Rose Website",
  imgUrl:"/Rose-Flower-Shop.PNG",
  Description:"html5 , css3  ",
  githubLink:"https://github.com/nouraabdelfattah/Rose-flower-shop-html5-css3",
  deployLink:"https://nouraabdelfattah.github.io/Rose-flower-shop-html5-css3/",
  responsive:" Not responsive"
  
  },
  {
      id:5,
  projectName:"Book Store",
  imgUrl:"/Book-store.PNG",
  Description:" html , css  ",
  githubLink:"https://github.com/nouraabdelfattah/book-store-html-css",
  deployLink:"https://nouraabdelfattah.github.io/book-store-html-css/",
  responsive:" Not responsive"
  
  }
  ]
  const htmlProjects=[
      {
          id:5,
      projectName:"Book Store",
      imgUrl:"/Book-store.PNG",
      Description:" html , css  ",
      githubLink:"https://github.com/nouraabdelfattah/book-store-html-css",
      deployLink:"https://nouraabdelfattah.github.io/book-store-html-css/",
      responsive:" Not responsive"
      
      }
  ]
  const html5Projects=[
      {
          id:4,
      projectName:"Rose Website",
      imgUrl:"/Rose-Flower-Shop.PNG",
      Description:"html5 , css3  ",
      githubLink:"https://github.com/nouraabdelfattah/Rose-flower-shop-html5-css3",
      deployLink:"https://nouraabdelfattah.github.io/Rose-flower-shop-html5-css3/",
      responsive:" Not responsive"
      
      }
  ]
  const ReactProjects=[
      {
          "id":1,
      projectName:"Gemini-Clone AI",
      imgUrl:"/gemini clone.PNG",
      Description:" React JS and API ",
      githubLink:"https://github.com/nouraabdelfattah/gemini-clone",
      deployLink:"https://gemini-clone-topaz.vercel.app/",
      responsive:"Responsive"
      }    
  ]
  const JavaScriptProjects=[
    {
      id:2,
  projectName:"saba-shopping-cart",
  imgUrl:"/saba-shopping-cart.PNG",
  Description:"JavaScript ",
  githubLink:"https://github.com/nouraabdelfattah/saba-shopping-cart-JavaScript",
  deployLink:"https://nouraabdelfattah.github.io/saba-shopping-cart-JavaScript/",
  responsive:"  Responsive"
  
  }    
  ]
  const bootstrapProjects=[
      {
          id:3,
          imgUrl:"/cloths-shop.PNG",
      projectName:"Cloths shop website",
      Description:" bootstrap ",
      githubLink:"https://github.com/nouraabdelfattah/bootstrap-website",
      deployLink:"https://nouraabdelfattah.github.io/bootstrap-website/",
      responsive:"Responsive"
      }    
  ]
  
  


export default function Main() {
  const [state,setState]=useState("all")
 const [projectsArr,setProjectsArr]=useState(projects)
  return (
    <main className="container"> 
    <div className="main-title">Projects</div>
      <section className="left-section row">
      <button onClick={()=>{
        setState("all")
        setProjectsArr(projects)
      }} className={state=="all"?"active":""}>All Projects</button>
        <button onClick={()=>{
          setState("html")
          setProjectsArr(htmlProjects)
        }} className={state=="html"?"active":""}>Html & Css</button>
        <button onClick={()=>{
          setState("html5")
          setProjectsArr(html5Projects)
        }} className={state=="html5"?"active":""}>Html5 & Css3</button>
        <button onClick={()=>{
          setState("Bootstrap")
          setProjectsArr(bootstrapProjects)
        }} className={state=="Bootstrap"?"active":""}>Bootstrap</button>
        <button onClick={()=>{
          setState("JavaScript")
          setProjectsArr(JavaScriptProjects)
        }} className={state=="JavaScript"?"active":""}>JavaScript</button>
        <button onClick={()=>{
          setState("React")
          setProjectsArr(ReactProjects)
        }} className={state=="React"?"active":""}>React</button>
        
      </section>

 <section className="main-section row">
       {projectsArr.map((item)=>{
        return(
          <div key={item.id} className="card col-md-4 col-sm-12">
          <div className="project-photo ">
             <img className='' src={item.imgUrl}/>
          </div>
          <div className="projects-title">
            <h2 className='main-subtitle'>{item.projectName}</h2>
           <p className="project-details">{item.Description}</p>
           <p className="project-subDetails">{item.responsive}</p>
               
                <div className=" main-links">
    <a href={item.deployLink} className="">Deploy&nbsp; <FaLink/></a>
    <a  href={item.githubLink} className="">GitHub&nbsp;<FaGithub/></a>
    </div>
           
          </div>
          </div>
          
        )
       })}
      </section> 
    </main>
  );
}
