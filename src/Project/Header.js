import { Link } from "react-router-dom";
import "../Project/sss.css";
function Header() {
    return ( 
        <div>
           <div id="web">
            <div style={{color:"white", fontFamily:"serif",fontSize:40, fontStyle:"bold", marginLeft:40,
   marginTop:0, display:"flex",alignItems:"center"
        }}>RASM</div>
          <div id="searc">
        <nav class="navbar navbar-light bg-ffd580">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-light" type="submit">Search</button>
    </form>
  </div>
</nav>
</div>

<div class="btn-group">
<Link to={"LogIn"}>
  <div id="but1" class="btn1"><button type="button" class="btn" style={{color:"white"}}>
    Log in </button></div>
    </Link>
   
  
  
 
    <Link to={"SignIn"}>
    <div id="but2" class="btn2"> <button type="button" class="btn">
  Sign in</button></div>
  </Link>

</div>
</div>

        </div>
     );
}

export default Header;