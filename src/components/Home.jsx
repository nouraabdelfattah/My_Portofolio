import React from 'react'
import Header from './1-header/Header'
import Hero from './2-hero/Hero'
import About from './3-about-me/About'
import Main from './4-main/Main'
import Experience from './5-Experience/Experience'
import Contact from './6-contact/Contact'

export default function Home() {
  return (
    <div>
      <div id="home"><Hero/></div>
      <div id="about"><About/></div>
      <div id="projects"><Main/></div>
      <div id="experience"><Experience/></div>
      <div id="contact"><Contact/></div>
    </div>
  )
}
