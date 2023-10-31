import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Project from '../Projects/Projects'
import Resume from '../Resume/Resume'
import Blog from '../Blog/Blog'

// css
import "../Common.css"
import "./Header.css"

function Header() {
  return (
    <>
      <Router className='nav'>
        <div id="show" className="m_stndrd"><i className="fas fa-solid fa-bars" id="s" onClick={show}></i></div>
        <div className="nav flex_arnd p_stndrd ul" id='ul'>

          <Link to="/">Home</Link>
          <Link to="/Project">Projects</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Resume">Resume</Link>
          <Link to="/Blog">Blog</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Project' element={<Project />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Resume' element={<Resume />}></Route>
          <Route path='/Blog' element={<Blog />}></Route>
        </Routes>
      </Router>

    </>
  );
}


function show() {
  var sh = document.getElementById('s');
  var isTrue = sh.classList.toggle('fa-window-close');

  var ul = document.getElementById('ul');
  if (isTrue === true) {
    ul.style.display = "flex";
    ul.style.flexDirection = "column";
    ul.style.height = "auto";
    ul.style.top = "58px";
    ul.style.right = "2px";
  }
  else {
    ul.style.display = "none";
  }

}

export default Header;
