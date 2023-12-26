import React from 'react'
// css imported
import "../Common.css"
import "./Footer.css"
// imges
import github from "../../images/github.svg"
import linkedin from "../../images/linkedin.svg"
import instagram from "../../images/instagram.png" 
import leetcode from "../../images/leetcode.png"
import gfg from "../../images/gfg.png"
import medium from "../../images/medium.png"

function Footer() {
  return (
    <div className="footer m_stndrd box_shdow">

      <div className=" p_stndrd  ">
        <h3 className="txt_center p_stndrd">CONNECT WITH ME</h3>
        <ul className="skills flex_arnd m_stndrd">
           <li><a href="https://github.com/Codessmasher"><img src={github} alt='' className="img_size_footer"/></a></li>
           <li><a href="https://www.linkedin.com/in/CodessmasherDeepjyotiDas"><img src={linkedin} alt='' className="img_size_footer"/></a></li>
           <li><a href="https://www.instagram.com/code._.smashers"><img src={instagram} alt='' className="img_size_footer"/></a></li> 
           <li><a href="https://leetcode.com/codesplash"><img src={leetcode} alt='' className="img_size_footer"/></a></li>
           <li><a href="https://auth.geeksforgeeks.org/user/codesplash"><img src={gfg} alt='' className="img_size_footer"/></a></li>
           <li><a href="https://codesplash.medium.com/"><img src={medium} alt='' className="img_size_footer"/></a></li>
        </ul>
      </div>

    </div>
  ) 
}

export default Footer
