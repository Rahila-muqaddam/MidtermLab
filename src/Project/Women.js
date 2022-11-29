import "../Project/sss.css";
import {useState} from "react";
import { Link } from "react-router-dom";
function Women() {
    
    return ( 
        <div >
            <h2 style={{textAlign:"center",fontStyle: "bold",backgroundColor:"pink",height:70,color:"white",
            justifyContent:"center", display:"flex",marginBottom:-30,paddingTop:12}}
             >Women Collections</h2>
       
<div id="card1" >
 <img src="./Images/image15.jpg" class="d-block w-100" alt="..." />
  <div class="card-body">
    <h6 class="card-title"> Traditional afghan dress</h6>
    <p class="card-text">$200</p> 
    </div>
    </div>
    
    <div id="card2">
  <img src="./Images/dress6.jpg" class="d-block w-100" alt="..." style={{height:310}}/>
  <div class="card-body">
    <h6 class="card-title">trendy logn goan</h6>
    <p class="card-text">$500.</p> 
    </div>
    </div>
    <div id="card3">
  <img src="./Images/image35.jpg" class="d-block w-100" alt="..."  style={{height:310}}/>
  <div class="card-body">
    <h6 class="card-title">Gol Nigar</h6>
    <p class="card-text">$200.</p> 
    </div>
    </div>
    <div id="card4">
  <img src="./Images/image36.jpg" class="d-block w-100" alt="..." style={{width:200,height:310}} />
  <div class="card-body">
    <h6 class="card-title">Afghan vintage</h6>
    <p class="card-text">$400.</p> 
    </div>
    </div>



        </div>
     );
}

export default Women;