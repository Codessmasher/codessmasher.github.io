import React from 'react'
// images imported
import html from "../../images/html.svg"
import css from "../../images/css.svg"
import javascript from "../../images/javascript.svg"
import mongodb from "../../images/mongodb.svg"
import express from "../../images/express.svg"
import react from "../../images/react.svg"
import nodejs from "../../images/nodejs.svg" 
import php from "../../images/php.png"
import mysql from "../../images/mysql.png"
import bootstrap from "../../images/bootstrap.webp"

import se from "../../images/se.jpg"
// css imported
import "../Common.css"
import "./Home.css"


function Home() {
  return (
    <div className="main">

      <div id="intro" className="m_stndrd p_stndrd box_shdow flex_arnd">
        <div id="me_box">
          <h2 id="name" style={{color:"Pink"}}>DEEPJYOTI DAS</h2>
          <p id="detls">A HIGHLY PASSIONATE FULL-STACK WEB DEVELOPER USING MERN STACK,<br /> WITH HAVING GOOD GRASP OVER DSA AND CS FUNDAMENTALS</p>
        </div>
        <img src={se} alt="se" id="se"/>
      </div>

      <div id="technologies"  className="m_stndrd p_stndrd box_shdow ">
        <h3 style={{color:"green"}} className="txt_center p_stndrd">TECHNOLOGIES THOSE I USE FOR DEVELOPMENT</h3>
        <ul className="skills flex_arnd m_stndrd">
          <li><img src={html} alt="html" />HTML</li>
          <li><img src={css} alt="css" />CSS</li>
          <li><img src={javascript} alt="javascript" />JAVASCRIPT</li>
          <li><img src={mongodb} alt="mongodb" />MONGODB</li>
          <li><img src={express} alt="express" />EXPRESS</li>
          <li><img src={react} alt="react" />REACT</li>
          <li><img src={nodejs} alt="nodejs" />NODEJS</li>
          <li><img src={bootstrap} alt="bootstrap" />BOOTSTRAP</li>
          <li><img src={php} alt="php" />PHP</li>
          <li><img src={mysql} alt="mysql" />MYSQL</li>
        </ul>
      </div>

    </div>
  )
}

export default Home
