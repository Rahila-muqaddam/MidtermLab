import {Link} from "react-router-dom";
function Arrival(props) {
    return ( 
        <div>
            <h2 style={{textAlign:"center",fontStyle: "bold",backgroundColor:"pink",height:70,color:"white",
            justifyContent:"center", display:"flex",marginBottom:-30,paddingTop:12}}
             >New Winter Collections</h2>
         
<div id="card1" style={{marginLeft:300}}>
  <Link to={"Stat"}><img src="./Images/image20.jpg" class="d-block w-100" alt="..." style={{height:310}}/></Link>
  <div class="card-body">
    <h6 class="card-title">Mini sweater</h6>
    <p class="card-text">$100</p> 
    <p>{props.dresss}</p>
    </div>
    </div>
    <div id="card2" style={{marginLeft:650}}>
    <Link to={"Stat"}><img src="./Images/jew4.jpg" class="d-block w-100" alt="..." style={{height:310}}/></Link>
  <div class="card-body">
    <h6 class="card-title">Arabic headwear</h6>
    <p class="card-text">$500.</p> 
    </div>
    </div>

</div>
        
     );
}

export default Arrival;