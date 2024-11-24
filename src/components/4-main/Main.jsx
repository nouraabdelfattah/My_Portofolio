import "./main.css";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
const projects= [

   {
      "id":1,
  projectName:"Food Delivery website",
  imgUrl:"/restaurantphoto.PNG",
  Description:" React JS and API ",
  githubLink:"https://github.com/weamibrahim/FoodDelivery",
  deployLink:"https://food-delivery-fg8n.vercel.app/",
  responsive:"Responsive"
  },
  {
      "id":2,
  projectName:"E-Commerce clothes shop",
  imgUrl:"/ecommerce.PNG",
  Description:" React JS and API ",
  githubLink:"https://github.com/nouraabdelfattah/e-commerce",
  deployLink:"https://e-commerce-beta-seven-87.vercel.app/",
  responsive:"Responsive"
  },
  {
      "id":3,
  projectName:"Gemini-Clone AI",
  imgUrl:"/gemini clone.PNG",
  Description:" React JS and API ",
  githubLink:"https://github.com/nouraabdelfattah/gemini-clone",
  deployLink:"https://gemini-clone-topaz.vercel.app/",
  responsive:"Responsive"
  },
  {
    id:4,
projectName:"saba-shopping-cart",
imgUrl:"/saba-shopping-cart.PNG",
Description:"JavaScript ",
githubLink:"https://github.com/nouraabdelfattah/saba-shoppingcart-javaScript",
deployLink:"https://nouraabdelfattah.github.io/saba-shoppingcart-javaScript/",
responsive:"  Responsive"

} ,
  {
      id:5,
      imgUrl:"/cloths-shop.PNG",
  projectName:"Clothes shop website",
  Description:" Bootstrap ",
  githubLink:"https://github.com/nouraabdelfattah/cloths-shop-bootstrap",
  deployLink:"https://nouraabdelfattah.github.io/cloths-shop-bootstrap/",
  responsive:"Responsive"
  },
  {
      id:6,
  projectName:"Interior Design",
  imgUrl:"/interior.PNG",
  Description:"Bootstrap",
  githubLink:"https://github.com/nouraabdelfattah/interior-design",
  deployLink:"https://nouraabdelfattah.github.io/interior-design/",
  responsive:"Responsive"
  
  }
  
  ]
  


export default function Main() {
 
 const [projectsArr,setProjectsArr]=useState(projects)
  return (
    <main className="container main "> 
    <div className="main-title mt-5">Top Projects</div>
    <span className="sub-span"></span>
     

 <section className="main-section  container row">
       {projectsArr.map((item,index)=>{
        return(
          <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          key={item.id} className="card col-lg-4 col-md-6 col-sm-12  projects-card">
          <div className="project-photo ">
             <img className='' src={item.imgUrl}/>
          </div>
          <h2 className='main-subtitle'>{item.projectName}</h2>
          <div className="projects-title">
            
          <div className="projects-title-content">
          <p className="project-details">{item.Description}</p>
          <p className="project-subDetails">{item.responsive}</p>
          <div className=" main-links">
    <a href={item.deployLink} className="">Deploy&nbsp; <FaLink/> &nbsp; &nbsp;</a>
    <a  href={item.githubLink} className="">GitHub&nbsp;<FaGithub/></a>
    </div>
          </div>
           
          </div>
          </motion.div>
          
        )
       })}
       <Link className="allprojects" to={'/allprojects'}>All Projects</Link>
      </section> 
      <hr></hr>
    </main>
    
  );
}
