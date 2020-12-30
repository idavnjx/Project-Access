function openLogin() {
  document.getElementById("Login").style.display = "block";
  document.getElementById("Signup").style.display = "none"
  document.getElementById("membership").style.opacity = "0.4";
  document.getElementById("navigation").style.opacity = "0.4";
}

function closeLogin() {
  document.getElementById("Login").style.display = "none";
  document.getElementById("membership").style.opacity = "1";
  document.getElementById("navigation").style.opacity = "1";
}

function openSignup() {
  document.getElementById("Login").style.display = "none";
  document.getElementById("Signup").style.display = "block";
}

function closeSignup() {
  document.getElementById("Signup").style.display = "none";
}
