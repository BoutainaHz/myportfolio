import React,{useState} from 'react'
import "../../../assets/css/navbar/navbar.css"

export default function Navbar(props) {
  const [fix, setfix] = useState(false)
  const [id, setid] = useState()

  function setfixed(){
   
      if(window.scrollY >=300){
        console.log("hhhhh"+window.scrollY)
        setfix(true)
        
      }
      else{
        setfix(false)
      }
  }
const goingto = ()=>{
  setid("about")
  console.log("hhhh"+id)
}
  
  window.addEventListener("scroll", setfixed)
  let url ="#about"
  return (
    <div>
   <nav className={fix ?"page__menu menu   row" :"page__menu  menu fixed row"}>
    <ul className='menu__list_start col'>
    <li className="menu__group"><a href={url} className="menu__link r-link ">
      <img className='logo' src={require("../../../assets/images/home/logo.png")} alt="logo" />
      </a></li>
    </ul>
    <ul className="menu__list r-list col">
      <li className="menu__group" ><a href={url}  className="menu__link r-link text-underlined">Boutaina</a></li>
      <li className="menu__group" onClick={goingto} ><a href={url} className="menu__link r-link text-underlined">About</a></li>
      <li className="menu__group"><a href={url} className="menu__link r-link text-underlined">Skills</a></li>
      <li className="menu__group"><a href={url} className="menu__link r-link text-underlined">Work</a></li>
      <li className="menu__group"><a href={url} className="menu__link r-link text-underlined">Contact Me</a></li>
    </ul>
  </nav>
  
    </div>
  )
}
