function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username == "test" && password == "test") {
    document.querySelector(".succeed").style.display = "block";
    // document.querySelector(".login").style.display = "none";
    setTimeout(function () {
      document.querySelector(".succeed").style.display = "none";
      document.querySelector(".login-container").style.display = "none";
    }, 3000);
    document.querySelector(".data").style.display = "block";
  } else {
    document.querySelector(".error").style.display = "block";
    setTimeout(function () {
      document.querySelector(".error").style.display = "none";
    }, 3000);
  }
}
