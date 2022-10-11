import { Component } from "react";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { icon } from "@fortawesome/fontawesome-svg-core";

export class Navbar extends Component{
  
  constructor(props){
super(props);
this.state={
icon:"none",

}
  }
 

  


  render(){
    
    return( 
      <>
      <nav className="nav">
<a className="logo">NAVBAR</a>
<ul >
  <li><a href="#">Home</a></li>
  <li><a href="#">Features</a></li>
  <li><a href="#">Blog</a></li>
  <li><a href="#">Contact</a></li>
</ul>
<FontAwesomeIcon className={icon} icon={faBars} onClick={()=>{
  
}} />

      </nav>
      <div></div>
    </>)
  }
}

