import Hero from './components/2-hero/Hero'
import Header from './components/1-header/Header'
import Main from './components/4-main/Main'
import Contact from './components/6-contact/Contact'
import { MdKeyboardArrowUp } from "react-icons/md";
import About from './components/3-about-me/About'
import Experience from './components/5-Experience/Experience'
import { useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
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
    <BrowserRouter>
    <div id='up' className=''>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/main" element={<Main />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
       <a style={{opacity:scroll?1:0, transition:"1s"}} href="#up">
       <button className='scroll-top'><MdKeyboardArrowUp/></button>
       </a>
     
    </div>
    </BrowserRouter>
  )
}

export default App
