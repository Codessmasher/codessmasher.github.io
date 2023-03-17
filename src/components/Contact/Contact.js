import { React, useState } from "react"
import "../Common.css"
import "./Contact.css"
function Contact() {
  const [userData, setuserData] = useState({
    "name": "",
    "email": "",
    "msg": ""
  })

  let name, value;
  const postData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuserData({ ...userData, [name]: value })
  }
  const submitData = async (e) => {
    e.preventDefault();
    const { name, email, msg } = userData;
    if (name && email && msg) {
      const res = await fetch("https://portfolio-form-559ee-default-rtdb.firebaseio.com/submitData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name, email, msg
          })
        });

      if (res) {
        setuserData({
          "name": "",
          "email": "",
          "msg": ""
        });
        alert("Message sent successfully")
      }
    } else { alert("Blank Submission is not allowed") }


  }
  return (
    <div>
      <h3 className="txt_center p_stndrd" style={{ color: "green" }}>GET IN TOUCH WITH ME</h3>
      <form action="" className='grid frm m_stndrd p_stndrd' >
        <div><input type="text" placeholder='Enter Name' name='name' value={userData.name} onChange={postData} />
          <br /><br />
          <input type="text" placeholder='Enter Email' name='email' value={userData.email} onChange={postData} />
        </div>
        <br />
        <textarea name="msg" placeholder="Your Message" cols="30" rows="10" className='cornr_crcl' value={userData.msg} onChange={postData}>Your Message</textarea><br />
        <button className='btn_non_outln' onClick={submitData}>SUBMIT</button>
      </form>
    </div>
  )
}

export default Contact