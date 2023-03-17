import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Timeline from "./Timeline/Timeline"
import "./About.css"
import "../Common.css"
import dataEd from "./Timeline/Education.json"
import dataAc from "./Timeline/Achievements.json"
// import dataEx from "./Timeline/Experiences.json"

import edu from "../../images/edu.jpg"
import code from "../../images/code.png"
function About() {
  return (
    <Container>
      <Row>
        <Col className='m_stndrd flex_arnd box_shdow p_stndrd timeln'>

            <Timeline desc="Education" data={dataEd}/>
            <img src={edu} width={500} alt='' className='hide_img'/>
        </Col>
        <Col className='m_stndrd flex_arnd box_shdow p_stndrd timeln'>

            <img src={code} width={500} alt='' className='hide_img'/>
            <Timeline desc="Achievements" data={dataAc}/>
        </Col>
      </Row>
    </Container>

  )
}

export default About