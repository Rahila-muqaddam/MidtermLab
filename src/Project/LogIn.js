import "../Project/sss.css";
function LogIn() {
    return ( 
        <div>
            <div id="logForm">
            <form action="/action_page.php">
              <h2>Log In</h2>
              <p>If you have  an account, log in with your Email address</p>
             
  <div class="mb-3 mt-3">
    <label for="email" class="form-label">Username*</label>
    <input type="email" class="form-control" id="email" name="email"/>
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label">Password*</label>
    <input type="password" class="form-control" id="pwd" name="pswd"/>
  </div>
  <button type="submit" class="btn btn-dark">Log In</button>
</form>
        </div>
        </div>
     );
}

export default LogIn;