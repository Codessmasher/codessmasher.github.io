import React from 'react'
// css imported
import "../Common.css"
import "./Footer.css"
// imges
import github from "../../images/github.svg"
import linkedin from "../../images/linkedin.svg"
import instagram from "../../images/instagram.png"
// import codechef from "../../images/CodeChef.webp"
import leetcode from "../../images/leetcode.png"

function Footer() {
  return (
    <div className="footer m_stndrd box_shdow">

      <div className=" p_stndrd  ">
        <h3 className="txt_center p_stndrd">CONNECT WITH ME</h3>
        <ul className="skills flex_arnd m_stndrd">
           <li><a href="https://github.com/Codessmasher"><img src={github} className="img_size_footer"/></a></li>
           <li><a href="https://www.linkedin.com/in/CodessmasherDeepjyotiDas"><img src={linkedin} className="img_size_footer"/></a></li>
           <li><a href="https://www.instagram.com/code._.smashers"><img src={instagram} className="img_size_footer"/></a></li>
           {/* <li><a href="https://www.codechef.com/users/codesmashers13"><img src={codechef} className="img_size_footer"/></a></li> */}
           <li><a href="https://leetcode.com/codesplash"><img src={leetcode} className="img_size_footer"/></a></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer