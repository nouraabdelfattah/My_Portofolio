import Hero from './components/2-hero/Hero'
import Header from './components/1-header/Header'
import Main from './components/4-main/Main'
import Contact from './components/6-contact/Contact'
import { MdKeyboardArrowUp } from "react-icons/md";
import About from './components/3-about-me/About'
import Experience from './components/5-Experience/Experience'
import { useEffect, useState } from 'react';
import Home from './components/Home';


function App() {
  const [scroll,setScroll]=useState(false)
useEffect(()=>{
window.addEventListener("scroll", () => {
  if(window.scrollY>300){
    setScroll(true)
  }else{
    setScroll(false)
  }
}
)
},)

  return (
   
    <div id='up' className=''>
      <Header/>
      <Routes>
      {<Home />
          <Hero />
          <About />
        <Main />
          <Experience />
          <Contact />
      </Routes>
       <a style={{opacity:scroll?1:0, transition:"1s"}} href="#up">
       <button className='scroll-top'><MdKeyboardArrowUp/></button>
       </a>
     
    </div>
   
  )
}

export default App
