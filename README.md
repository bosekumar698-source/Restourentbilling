<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Login - Restaurant Billing</title>
<link rel="stylesheet" href="Index.css" />
<script src="Index.js" defer></script>
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</head>
<body>

 <!-- Main content to be blurred -->
  <div class="main-content">
    <div class="login-container">
      <div class="login-box">
        <h2 style="padding: 5px 0 18px;">Restaurant Billing System</h2>
        <form id="loginForm">
          <div class="input-group">
            <label>Username</label>
            <input id="username" type="text" placeholder="Enter your username" required />
          </div>
          <div class="input-group">
            <label>Password</label>
            <input id="password" type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" class="login-btn">Login</button>
        </form>
        <h5 style="padding: 20px 0 5px;">Don't have an account? <a style="text-decoration: none;" href="resister.html">Create Account</a></h5>
      </div>
    </div>
  </div>

  <!-- Popup (outside main-content) -->
 <div id="successPopup" class="popup">
  <div class="popup-content">
    <lottie-player
      src="https://assets5.lottiefiles.com/packages/lf20_jbrw3hcz.json"
      background="transparent"
      speed="1"
      style="width: 300px; height: 180px;"
      autoplay>
    </lottie-player>
    <h4 style="color: green;">Login successfull</h4>
    <h3>Wellcome Back! </h3>
    
  </div>
</div>

</body>
</body>
</html>
