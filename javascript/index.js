//to show password
function showpassword() {
  var password = document.getElementById("passwordinput");

  document.getElementById("img1").src = "images/eye-slash.svg";
  password.setAttribute("type", "text");
}

//to hide password
function hidepassword() {
  var password = document.getElementById("passwordinput");

  document.getElementById("img1").src = "images/eye.svg";
  password.setAttribute("type", "password");

}

//validate form
function validation() {

  var email = document.getElementById("emailinput");
  var user = document.getElementById("userinput");
  var password = document.getElementById("passwordinput");
  var confirm = document.getElementById("confirmpassword");
  var number = document.getElementById("numberinput")

  var regx = /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,20})/
  if (regx.test(text)) {
    email.style.borderColor = "green";

  } else {
    email.style.borderColor = "red";
    alert("use a valid email address");
  }

  if (user.value.trim() == "") {
    alert("blank username");
    user.style.borderColor = "red";
    return false;
  } else if (password.value.trim() == "") {
    alert("blank password")
    return false;
  } else if (password.value != confirm.value) {
    alert("passwords do not match");
    return false;
  } else {
    return true;
  }

}



