import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>Home</nav>

      <header className="App-header">
        <p>Let's get this party started!</p>
      </header>

      <div>
        <div id="container" >
          <a class="hiddenanchor" id="toregister"></a>
          <a class="hiddenanchor" id="tologin"></a>
          <div id="wrapper">
            <div id="login" class="animate form">
              <form action="mysuperscript.php" autocomplete="on">
                <h1>Login</h1>
                <p>
                  <label for="username" class="uname" data-icon="u" > Email or Username </label>
                  <input id="username" name="username" required="required" type="text" placeholder="myusername or mymail@mail.com" />
                </p>
                <p>
                  <label for="password" class="youpasswd" data-icon="p"> Password </label>
                  <input id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" />
                </p>
                <p class="keeplogin">
                  <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" />
                  <label for="loginkeeping">Keep me logged in</label>
                </p>
                <p class="login button">
                  <input type="submit" value="Login" />
                </p>
                <p class="change_link">
                  Not a member yet?
					<a href="#toregister" class="to_register">Register</a>
                </p>
              </form>
            </div>

            <div id="register" class="animate form">
              <form action="mysuperscript.php" autocomplete="on">
                <h1> Register </h1>
                <p>
                  <label for="usernamesignup" class="uname" data-icon="u">Username</label>
                  <input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="j.doe@mail.com" />
                </p>
                <p>
                  <label for="emailsignup" class="youmail" data-icon="e" > Email</label>
                  <input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="j.doe@mail.com" />
                </p>
                <p>
                  <label for="passwordsignup" class="youpasswd" data-icon="p">Password </label>
                  <input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="eg. LazyCat43" />
                </p>
                <p>
                  <label for="passwordsignup_confirm" class="youpasswd" data-icon="p">Confirm Password </label>
                  <input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="eg. LazyCat43" />
                </p>
                <p class="signin button">
                  <input type="submit" value="Register" />
                </p>
                <p class="change_link">
                  Already a member ?
					      <a href="#tologin" class="to_register"> Go To Login </a>
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>


    </div>
  );
}

export default App;

