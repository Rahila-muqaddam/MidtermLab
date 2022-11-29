import { Link } from "react-router-dom";

function SignIn() {
    return ( 
        <div id="SignForm">

            <form action="/action_page.php">
              <h2>Create Account</h2>
  <div class="mb-3 mt-3">
   <h4>Personal Information</h4>
    <label for="txt" class="form-label">First Name</label>
   
    <input type="txt" class="form-control" id="txt" name="Firstname"/>
    
    
  </div>
  <div class="mb-3 mt-3">
  <label for="txt" class="form-label">Last Name</label>
  <input type="txt" class="form-control" id="txt" name="Lastname"/>

  </div>
  <div class="mb-3 mt-3">
   <h4>Sign-In Information</h4>
    <label for="email" class="form-label1">Email</label>
    <input type="email" class="form-control" id="email" name="email"/>
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label1">Password</label>
    <input type="password" class="form-control" id="pwd" name="pswd"/>
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label2">Confirm Password:</label>
    <input type="password" class="form-control" id="pwd" name="pswd"/>
  </div>
  
  <button type="submit" class="btn btn-dark">Register</button>
  
</form>
    
        </div>
     );
}

export default SignIn;