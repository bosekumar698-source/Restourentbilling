document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.getElementById("loginForm");
  const mainContent = document.querySelector(".main-content");
  const popup = document.getElementById("successPopup");

  if(loginForm){
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if(username && password) {

        // Show popup
        popup.style.display = "flex";

        // Blur background
        if(mainContent){
          mainContent.classList.add("blur");
        }

        // Redirect after 3 sec
        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 3000);

      } else {
        alert("Please enter valid username and password");
      }
    });
  }

});