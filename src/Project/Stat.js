import {useState} from "react";
import Arrival from "./Arrival";
import "./sss.css";



function Stat() {
    const [dress, setDress] = useState({
        color: "multicolor",
        brand: "ayeda",
        size: "large"
    });

 
    const[quantity, setQuantity] = useState( 4 ); 
        function increase(){
            setQuantity(quantity+1)
        }
        function decrease(){
            setQuantity(quantity-1)
        } 
    return ( 
       <div>
       <div id="styl">
           <p>Color: {dress.color}</p>
            <p>Brand: {dress.brand}</p>
    <p>Size: {dress.size}</p>
    <button onClick={decrease}> -  </button> 
    { quantity }
    <button onClick={increase}>  +</button> </div>
 <Arrival 
  dresss = {dress}
 />
        
        </div>
     );
}

export default Stat;