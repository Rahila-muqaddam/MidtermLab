import { Link } from "react-router-dom";
import "../Project/sss.css";
function Navigationbar() {
    return (  
        <div>
           <nav id="navv" class="navbar navbar-expand-lg ">
  <div class="container-fluid">
  <Link to={"Admin"} className="about">
        
        <a class="nav-link" href="#" style={{color:"#192841",marginTop:-8}}>
        
        <div id="di"></div>
<div id="di"></div>
<div id="di"></div>
        </a>
        </Link>
  <Link to={"Home"} className="menu" style={{marginLeft:330}}>
      Home </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <Link to={"Arrival"} className="arr">
        <li  class="nav-item">
        <a class="nav-link" href="#" style={{color:"#192841",marginLeft:15}}>New Arrivals</a>
        </li></Link>
        <li id="cloth" class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" 
        role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"#192841"}}>
            Clothes </a>
          
          <ul class="dropdown-menu">
            <li><Link to={"Women"} className="menu">Women</Link></li>
            <li><Link to={"Men"} className="menu">Men</Link></li>
          
            <li><Link to={"Kids"} className="menu">Kids</Link></li>
          </ul>
      </li>
        <li id="access" class="nav-item dropdown" >
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" 
        aria-expanded="false" style={{color:"#192841"}}>
            Accessories
            </a>
          
          <ul class="dropdown-menu">
            <li><Link to={"Jewellry"}  className="menu">Jewellry</Link></li>
            <li><Link to={"Hats"} className="menu">Hats</Link></li>
          
            <li><Link to={"Shawls"} className="menu">Shawls</Link></li>
          </ul>
      </li>
      <Link to={"sale"} className="menu">
        <li  class="nav-item" className="sale">
        <a class="nav-link" href="#" style={{color:"#192841"}}>Sale</a> 
        </li></Link>
        <Link to={"about"} className="about">
        <li  class="nav-item">
        <a class="nav-link" href="#" style={{color:"#192841"}}>About us</a>
        </li></Link>
       
        
      </ul>
    </div>
  </div>
</nav> 

        </div>
    );
}

export default Navigationbar;